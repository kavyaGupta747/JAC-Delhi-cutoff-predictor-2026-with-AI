import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { ACTUAL_R1_2026, getPredictionsForCategory, BRANCHES } from './src/data';
import { CategoryCode, BranchCode } from './src/types';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

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

app.post('/api/counselor', async (req, res) => {
  try {
    const { message, chatHistory, category } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message payload is required' });
    }

    const ai = getAI();
    const activeCategory = (category || 'EWGND') as CategoryCode;
    
    // Obtain dynamic data for the active category
    const predictions = getPredictionsForCategory(activeCategory);
    
    let analysisString = `JAC Delhi 2026 Predictive Data for Category: ${activeCategory}\n\n`;
    for (const [key, value] of Object.entries(predictions)) {
        const branchName = BRANCHES[key as BranchCode].name;
        const college = BRANCHES[key as BranchCode].college;
        analysisString += `- ${college} ${branchName}: R1 Actual = ${value.actualR1}, Worst Case Limit (Upgrad) = ${value.worstCase.upgradation}, True Outcome Limit (Upgrad) = ${value.trueOutcome.upgradation}\n`;
    }

    const CUTOFF_CONTEXT = `
You are the "JAC Delhi AI College Counselor", an admissions expert providing personalized advice for DTU, NSUT, IIITD, and IGDTUW.
The candidate is using the ${activeCategory} category.

Here is the most up-to-date accurate model data for True Outcomes and Worst Case Outcomes for their category. 
You MUST ground your counseling entirely on this data context!
${analysisString}

Guidelines for responding:
1. DO NOT place arbitrary restrictions like a 5000 rank cap. Trust the generated dataset above. The worst case table is intentionally harsh and reduces hopium, while the true outcome is slightly more generous.
2. Focus on naming the BRANCHES and COLLEGES they can get, rather than just returning ranks. E.g., "At 50,000, you have strong chances of getting NSUT Mechanical and DTU Civil."
3. If they provide a JEE Main CRL rank, compare it with the Worst Case Limit and True Outcome Limit for relevant branches.
4. Keep answers friendly, objective, short, and use beautiful markdown. Do not hallucinate data that contrasts with the provided context.
`;

    const conversationContents = [];
    conversationContents.push({ 
      role: 'user', 
      parts: [{ text: `System context:\n${CUTOFF_CONTEXT}\n\nAcknowledge this system context and wait for user query.` }] 
    });
    conversationContents.push({ 
      role: 'model', 
      parts: [{ text: `Understood. I will act as a JAC Delhi AI Counselor relying strictly on the dynamic True/Worst Case metrics provided above for ${activeCategory}.` }] 
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
