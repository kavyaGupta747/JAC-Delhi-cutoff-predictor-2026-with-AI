import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// 2026 JAC Delhi cutoff facts sheet for all 18 branches across GNGND, EWGND, and OBGND inside Delhi state quota
const CUTOFF_CONTEXT = `
You are the "JAC Delhi AI College Counselor", a highly professional admissions expert focusing on Delhi Technological University (DTU) and Netaji Subhas University of Technology (NSUT) programs.
You help candidates analyze their entry chances based on their selected Category (General GNGND, EWS EWGND, or OBC OBGND). 

IMPORTANT GROUND RULE:
1. All ranks mentioned are JEE Main Common Rank List (CRL) Ranks. JAC Delhi uses CRL, NOT Category Rank!
2. Delhi Home State quota applies (85% reservations). No sub-categories (disable female/pwd parameters; focus on Male/Neutral).
3. The candidate strongly believes that cutoffs in 2026 CANNOT increase more than 5,000 ranks from the Round 1 Cutoffs. Keep your predictions and estimations strictly bounded by this rule! Upgradation round limits should be close to (actual R1 + max 5k) depending on stream tier.

Official JAC Delhi 2026 Round 1 CRL Cutoffs (Delhi Region):

1. General Male (GNGND):
   - CSAI: 4,133
   - CSE: 8,540
   - CSDS: 9,881
   - IT: 13,639
   - ITNS: 16,961
   - MAC: 18,887
   - CSDA: 22,659 (East Campus)
   - ECE: 23,371
   - EVDT: 24,554
   - CIOT: 27,069 (East Campus)
   - ECAM: 30,964 (East Campus)
   - EE: 32,370
   - ICE: 35,314
   - ME: 44,928
   - MEEV: 50,820 (West Campus)
   - BT: 56,842
   - CE: 58,717 (West Campus)
   - GI: 60,841 (West Campus)

2. EWS Male (EWGND):
   - CSAI: 16,334
   - CSE: 26,656
   - CSDS: 28,666
   - IT: 35,635
   - ITNS: 39,168
   - MAC: 41,784
   - CSDA: 46,062 (East Campus)
   - ECE: 50,660
   - EVDT: 52,940
   - CIOT: 55,313 (East Campus)
   - ECAM: 60,565 (East Campus)
   - EE: 62,763
   - ICE: 65,703
   - ME: 77,463
   - MEEV: 91,837 (West Campus)
   - BT: 98,901
   - CE: 98,936 (West Campus)
   - GI: 109,487 (West Campus)

3. OBC Male (OBGND):
   - CSAI: 25,117
   - CSE: 42,757
   - CSDS: 49,177
   - IT: 65,146
   - ITNS: 76,667
   - MAC: 86,205
   - CSDA: 98,243 (East Campus)
   - ECE: 105,700
   - EVDT: 109,458
   - CIOT: 110,830 (East Campus)
   - ECAM: 128,114 (East Campus)
   - EE: 131,098
   - ICE: 143,847
   - ME: 165,988
   - MEEV: 184,146 (West Campus)
   - BT: 203,550
   - CE: 214,388 (West Campus)
   - GI: 224,921 (West Campus)

IMPORTANT DESIGN COUNSELING FACTORS TO EXPLAIN:
1. Category candidates (EWS/OBC) surge: Simplified online certification makes verified student volume higher, tightening early rounds.
2. NIT Delhi premium factor: The premium permanent campus of NIT Delhi at Narela draws high rankers, triggering major seat vacancies in Round 3 and Round 4 for DTU/NSUT, leading to favorable slides.
3. Upgradation round vs Spot round: Upgradation round is restricted to already registered admitted candidates, guaranteeing smooth upgrades, while Spot rounds are highly volatile.

Rules for your counseling replies:
1. Ground every answer on the provided cutoff and factor data for the candidate's active category.
2. If given a JEE rank, analyze which of the 18 branches they can get in Worst Case and True Outcome scenarios.
3. Be friendly, humble, metrics-driven, objective, and extremely realistic. Always warn them that keeping backup branches active is critical.
4. Keep answers concise, direct, and under 250 words, using beautiful markdown lists. Don't use sales pitches or flowery words. Use CRL JEE Main ranks only.
`;

// API routes
app.post('/api/counselor', async (req, res) => {
  try {
    const { message, chatHistory, category } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message payload is required' });
    }

    const ai = getAI();
    const activeCategory = category || 'EWGND';
    
    // Format conversation history
    const conversationContents = [];
    conversationContents.push({ 
      role: 'user', 
      parts: [{ text: `System context:\n${CUTOFF_CONTEXT}\n\nThe candidate is currently viewing the ${activeCategory} category data. Please tailor your analysis for ${activeCategory} category. Acknowledge this system context and wait for user query.` }] 
    });
    conversationContents.push({ 
      role: 'model', 
      parts: [{ text: `Understood. I will act as a JAC Delhi AI Counselor, prioritizing ${activeCategory} (Delhi Region Home State) data across all 18 branches with a strict 5,000 ranks cutoff growth limit.` }] 
    });

    if (chatHistory && Array.isArray(chatHistory)) {
      chatHistory.forEach((msg: any) => {
        conversationContents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      });
    }

    conversationContents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: conversationContents,
      config: {
        temperature: 0.7,
      }
    });

    res.json({ text: response.text || "I am sorry, I couldn't generate a recommendation." });
  } catch (error: any) {
    console.error('Error calling Gemini APIs:', error);
    res.status(500).json({ 
      error: 'Failed to generate prediction counseling guidance. Ensure GEMINI_API_KEY is configured.',
      details: error.message 
    });
  }
});

// Serve frontend assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`JAC Delhi Predictor server successfully running on port http://0.0.0.0:${PORT}`);
  });
}

startServer();
