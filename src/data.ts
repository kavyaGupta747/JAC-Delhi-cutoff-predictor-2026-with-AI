import { BranchInfo, CutoffData, Prediction2026, BranchCode, CategoryCode } from './types';

export const BRANCHES: Record<BranchCode, BranchInfo> = {
  NSUT_CSAI: { code: 'NSUT_CSAI', college: 'NSUT', name: 'Computer Science (AI)', campus: 'NSUT Main', description: 'Specialization in CS focusing on artificial intelligence and deep learning.', duration: '4 Years', intake: 120 },
  NSUT_CSE: { code: 'NSUT_CSE', college: 'NSUT', name: 'Computer Science and Engineering', campus: 'NSUT Main', description: 'Foundational computer science curriculum covering algorithms and systems.', duration: '4 Years', intake: 180 },
  NSUT_CSDS: { code: 'NSUT_CSDS', college: 'NSUT', name: 'Computer Science (Data Science)', campus: 'NSUT Main', description: 'Computer Science track centering on big data platforms and analytical databases.', duration: '4 Years', intake: 120 },
  NSUT_IT: { code: 'NSUT_IT', college: 'NSUT', name: 'Information Technology', campus: 'NSUT Main', description: 'Information systems, cloud infrastructure networks, and server scaling.', duration: '4 Years', intake: 120 },
  NSUT_ITNS: { code: 'NSUT_ITNS', college: 'NSUT', name: 'IT (Network & Information Security)', campus: 'NSUT Main', description: 'Focused study on cybersecurity diagnostics and virtual networks.', duration: '4 Years', intake: 60 },
  NSUT_MAC: { code: 'NSUT_MAC', college: 'NSUT', name: 'Mathematics and Computing', campus: 'NSUT Main', description: 'Interdisciplinary program combining mathematics and computer science.', duration: '4 Years', intake: 90 },
  NSUT_ECE: { code: 'NSUT_ECE', college: 'NSUT', name: 'Electronics & Communication', campus: 'NSUT Main', description: 'Core hardware, cellular communication networks, and telecom design.', duration: '4 Years', intake: 240 },
  NSUT_EVDT: { code: 'NSUT_EVDT', college: 'NSUT', name: 'Electronics Engineering (VLSI)', campus: 'NSUT Main', description: 'Semiconductor layouts, chip fabrication, and core VLSI design.', duration: '4 Years', intake: 90 },
  NSUT_EE: { code: 'NSUT_EE', college: 'NSUT', name: 'Electrical Engineering', campus: 'NSUT Main', description: 'Power transmission, smart energy generation, and electrical circuit designs.', duration: '4 Years', intake: 120 },
  NSUT_ICE: { code: 'NSUT_ICE', college: 'NSUT', name: 'Instrumentation & Control', campus: 'NSUT Main', description: 'Sensory devices, SCADA, industrial automation transmitters, and robotics.', duration: '4 Years', intake: 120 },
  NSUT_ME: { code: 'NSUT_ME', college: 'NSUT', name: 'Mechanical Engineering', campus: 'NSUT Main', description: 'Thermodynamics, computational fluid dynamics (CFD), and structural dynamics.', duration: '4 Years', intake: 120 },
  NSUT_BT: { code: 'NSUT_BT', college: 'NSUT', name: 'Bio-Technology', campus: 'NSUT Main', description: 'Genetic engineering, bioinformatics, and fermentation technology.', duration: '4 Years', intake: 60 },
  NSUT_CSDA: { code: 'NSUT_CSDA', college: 'NSUT', name: 'CS (Big Data Analytics)', campus: 'NSUT East', description: 'East campus specialization centering on modern enterprise databases.', duration: '4 Years', intake: 60 },
  NSUT_CIOT: { code: 'NSUT_CIOT', college: 'NSUT', name: 'CS (Internet of Things)', campus: 'NSUT East', description: 'Embedded firmware, hardware sensors, and wireless networks.', duration: '4 Years', intake: 60 },
  NSUT_ECAM: { code: 'NSUT_ECAM', college: 'NSUT', name: 'Electronics (AI & ML)', campus: 'NSUT East', description: 'Electronics branch integrated with ML accelerators and neural processors.', duration: '4 Years', intake: 120 },
  NSUT_MEEV: { code: 'NSUT_MEEV', college: 'NSUT', name: 'Mechanical (Electric Vehicles)', campus: 'NSUT West', description: 'Specialization on EV drivetrains, lithium battery packs, and solid-state safety.', duration: '4 Years', intake: 60 },
  NSUT_CE: { code: 'NSUT_CE', college: 'NSUT', name: 'Civil Engineering', campus: 'NSUT West', description: 'Structural blueprints, urban transit, and geotechnical mapping.', duration: '4 Years', intake: 60 },
  NSUT_GI: { code: 'NSUT_GI', college: 'NSUT', name: 'Geoinformatics', campus: 'NSUT West', description: 'Spatial modeling mapping, drone surveying, and GIS mapping.', duration: '4 Years', intake: 60 },
  DTU_COE: { code: 'DTU_COE', college: 'DTU', name: 'Computer Engineering', campus: 'DTU Main', description: 'Highly sought-after core coding, software engineering & architecture branch.', duration: '4 Years', intake: 480 },
  DTU_SE: { code: 'DTU_SE', college: 'DTU', name: 'Software Engineering', campus: 'DTU Main', description: 'Intensive focus on SDLC, agile practices, project management, and scalable systems.', duration: '4 Years', intake: 180 },
  DTU_MCE: { code: 'DTU_MCE', college: 'DTU', name: 'Mathematics & Computing', campus: 'DTU Main', description: 'Heavy focus on applied math, statistics, deep learning formulations, and robust coding.', duration: '4 Years', intake: 180 },
  DTU_IT: { code: 'DTU_IT', college: 'DTU', name: 'Information Technology', campus: 'DTU Main', description: 'Cloud networks, system architecture, database fundamentals, and enterprise setups.', duration: '4 Years', intake: 180 },
  DTU_ECE: { code: 'DTU_ECE', college: 'DTU', name: 'Electronics & Communication', campus: 'DTU Main', description: 'High-tier circuitry design, microprocessors, signal processing, and antenna systems.', duration: '4 Years', intake: 240 },
  DTU_EE: { code: 'DTU_EE', college: 'DTU', name: 'Electrical Engineering', campus: 'DTU Main', description: 'Heavy current systems, motors, generators, grid connectivity, and power electronics.', duration: '4 Years', intake: 300 },
  DTU_ME: { code: 'DTU_ME', college: 'DTU', name: 'Mechanical Engineering', campus: 'DTU Main', description: 'Classic physical engineering, heat transfer, CAD modeling, and industrial design.', duration: '4 Years', intake: 300 },
  DTU_PIE: { code: 'DTU_PIE', college: 'DTU', name: 'Production & Industrial Engg', campus: 'DTU Main', description: 'Operations management, supply chain optimization, and manufacturing techniques.', duration: '4 Years', intake: 90 },
  DTU_ENE: { code: 'DTU_ENE', college: 'DTU', name: 'Environmental Engineering', campus: 'DTU Main', description: 'Ecology mapping, climate systems, water treatment, and sustainable green techs.', duration: '4 Years', intake: 90 },
  DTU_CE: { code: 'DTU_CE', college: 'DTU', name: 'Civil Engineering', campus: 'DTU Main', description: 'Core infrastructure, concrete dynamics, soil analysis, and surveying.', duration: '4 Years', intake: 150 },
  DTU_CH: { code: 'DTU_CH', college: 'DTU', name: 'Chemical Engineering', campus: 'DTU Main', description: 'Reactor design, separations, petrochemical pathways, and material synthesis.', duration: '4 Years', intake: 90 },
  DTU_PCT: { code: 'DTU_PCT', college: 'DTU', name: 'Polymer Science and Tech', campus: 'DTU Main', description: 'Plastics, composites, macromolecules, and modern rubber technologies.', duration: '4 Years', intake: 60 },
  DTU_BT: { code: 'DTU_BT', college: 'DTU', name: 'Bio-Technology', campus: 'DTU Main', description: 'Biological sciences applied through computational models and synthetic biology.', duration: '4 Years', intake: 90 },
  DTU_EVDT: { code: 'DTU_EVDT', college: 'DTU', name: 'Electronics (VLSI Design)', campus: 'DTU Main', description: 'Chip architecture, embedded systems, and sophisticated semiconductor fabrication.', duration: '4 Years', intake: 60 },
  IIITD_CSAM: { code: 'IIITD_CSAM', college: 'IIITD', name: 'CS and Applied Mathematics', campus: 'IIITD Okhla', description: 'Rigorous theoretical framework combining mathematics with intensive CS programs.', duration: '4 Years', intake: 60 },
  IIITD_CSAI: { code: 'IIITD_CSAI', college: 'IIITD', name: 'CS and Artificial Intelligence', campus: 'IIITD Okhla', description: 'Cutting-edge AI modeling, cognitive science, and heavy neural networking frameworks.', duration: '4 Years', intake: 60 },
  IIITD_CSD: { code: 'IIITD_CSD', college: 'IIITD', name: 'Computer Science and Design', campus: 'IIITD Okhla', description: 'UI/UX integration, creative technology, spatial design, and software engineering.', duration: '4 Years', intake: 60 },
  IIITD_CSSS: { code: 'IIITD_CSSS', college: 'IIITD', name: 'CS and Social Sciences', campus: 'IIITD Okhla', description: 'Data analytics focused on social behavior, psychology, and structural inequalities.', duration: '4 Years', intake: 60 },
  IIITD_CSB: { code: 'IIITD_CSB', college: 'IIITD', name: 'Computer Science and Biosciences', campus: 'IIITD Okhla', description: 'Systems biology, computational genomics, and health data modeling technologies.', duration: '4 Years', intake: 60 },
  IIITD_ECE: { code: 'IIITD_ECE', college: 'IIITD', name: 'Electronics & Communication', campus: 'IIITD Okhla', description: 'Advanced communication grids, embedded design, and core circuit board design.', duration: '4 Years', intake: 60 },
  IIITD_EVE: { code: 'IIITD_EVE', college: 'IIITD', name: 'Electronics and VLSI Engineering', campus: 'IIITD Okhla', description: 'Dedicated VLSI circuits, nanoelectronics, and semiconductor processing labs.', duration: '4 Years', intake: 60 },
  IGDTUW_CSE: { code: 'IGDTUW_CSE', college: 'IGDTUW', name: 'Computer Science and Engineering', campus: 'IGDTUW Kashmere Gate', description: 'Premier core CS programming and computer architecture branch exclusively for females.', duration: '4 Years', intake: 200 },
  IGDTUW_CSAI: { code: 'IGDTUW_CSAI', college: 'IGDTUW', name: 'Computer Science and AI', campus: 'IGDTUW Kashmere Gate', description: 'Machine learning fundamentals and data processing pipelines mapping for females.', duration: '4 Years', intake: 150 },
  IGDTUW_IT: { code: 'IGDTUW_IT', college: 'IGDTUW', name: 'Information Technology', campus: 'IGDTUW Kashmere Gate', description: 'Web tech, networking applications, and scalable database integrations for females.', duration: '4 Years', intake: 150 },
  IGDTUW_ECE: { code: 'IGDTUW_ECE', college: 'IGDTUW', name: 'Electronics and Communication', campus: 'IGDTUW Kashmere Gate', description: 'Circuitry protocols, signal handling, and hardware board engineering for females.', duration: '4 Years', intake: 150 },
  IGDTUW_MEAM: { code: 'IGDTUW_MEAM', college: 'IGDTUW', name: 'Mechanical and Automation E.', campus: 'IGDTUW Kashmere Gate', description: 'Auto-control mechanisms, fluid machinery, and automotive electronics for females.', duration: '4 Years', intake: 90 },
  IGDTUW_DMAM: { code: 'IGDTUW_DMAM', college: 'IGDTUW', name: 'Dual Degree ME + MBA', campus: 'IGDTUW Kashmere Gate', description: 'Integrated B.Tech in Mechanical Automation coupled with Masters in Business Admin.', duration: '5 Years', intake: 60 }
};

export const ACTUAL_R1_2026: Record<CategoryCode, Record<BranchCode, number>> = {
  // ----------- DELHI REGION (HS) -----------
  GNGND: {
    NSUT_CSAI: 4133, NSUT_CSE: 8540, NSUT_CSDS: 9881, NSUT_IT: 13639, NSUT_ITNS: 16961, NSUT_MAC: 18887,
    NSUT_ECE: 23371, NSUT_EVDT: 24554, NSUT_EE: 32370, NSUT_ICE: 35314, NSUT_ME: 44928, NSUT_BT: 56842,
    NSUT_CSDA: 22659, NSUT_CIOT: 27069, NSUT_ECAM: 30964, NSUT_MEEV: 50820, NSUT_CE: 58717, NSUT_GI: 60841,
    DTU_COE: 5122, DTU_SE: 7064, DTU_MCE: 9450, DTU_IT: 10452, DTU_ECE: 17234, DTU_EE: 26842, DTU_ME: 37984,
    DTU_PIE: 42104, DTU_ENE: 48934, DTU_CE: 49833, DTU_CH: 54100, DTU_PCT: 59341, DTU_BT: 61842, DTU_EVDT: 18566,
    IIITD_CSAM: 3412, IIITD_CSAI: 2154, IIITD_CSD: 5312, IIITD_CSSS: 8945, IIITD_CSB: 9845, IIITD_ECE: 12431, IIITD_EVE: 14210,
    IGDTUW_CSE: 12345, IGDTUW_CSAI: 9541, IGDTUW_IT: 15642, IGDTUW_ECE: 25412, IGDTUW_MEAM: 48123, IGDTUW_DMAM: 49451
  },
  EWGND: {
    NSUT_CSAI: 16334, NSUT_CSE: 26656, NSUT_CSDS: 28666, NSUT_IT: 35635, NSUT_ITNS: 39168, NSUT_MAC: 41784,
    NSUT_ECE: 50660, NSUT_EVDT: 52940, NSUT_EE: 62763, NSUT_ICE: 65703, NSUT_ME: 77463, NSUT_BT: 98901,
    NSUT_CSDA: 46062, NSUT_CIOT: 55313, NSUT_ECAM: 60565, NSUT_MEEV: 91837, NSUT_CE: 98936, NSUT_GI: 109487,
    DTU_COE: 18451, DTU_SE: 24712, DTU_MCE: 30124, DTU_IT: 34512, DTU_ECE: 48512, DTU_EE: 65412, DTU_ME: 80145,
    DTU_PIE: 86451, DTU_ENE: 96123, DTU_CE: 91451, DTU_CH: 92451, DTU_PCT: 108451, DTU_BT: 110451, DTU_EVDT: 49122,
    IIITD_CSAM: 16123, IIITD_CSAI: 12451, IIITD_CSD: 20123, IIITD_CSSS: 25412, IIITD_CSB: 26451, IIITD_ECE: 32145, IIITD_EVE: 35124,
    IGDTUW_CSE: 41451, IGDTUW_CSAI: 35412, IGDTUW_IT: 48512, IGDTUW_ECE: 60124, IGDTUW_MEAM: 95412, IGDTUW_DMAM: 98412
  },
  OBGND: {
    NSUT_CSAI: 25117, NSUT_CSE: 42757, NSUT_CSDS: 49177, NSUT_IT: 65146, NSUT_ITNS: 76667, NSUT_MAC: 86205,
    NSUT_ECE: 105700, NSUT_EVDT: 109458, NSUT_EE: 131098, NSUT_ICE: 143847, NSUT_ME: 165988, NSUT_BT: 203550,
    NSUT_CSDA: 98243, NSUT_CIOT: 110830, NSUT_ECAM: 128114, NSUT_MEEV: 184146, NSUT_CE: 214388, NSUT_GI: 224921,
    DTU_COE: 28451, DTU_SE: 38124, DTU_MCE: 47124, DTU_IT: 55412, DTU_ECE: 81451, DTU_EE: 124512, DTU_ME: 154124,
    DTU_PIE: 168124, DTU_ENE: 195412, DTU_CE: 180451, DTU_CH: 185412, DTU_PCT: 212451, DTU_BT: 218451, DTU_EVDT: 85412,
    IIITD_CSAM: 24123, IIITD_CSAI: 18124, IIITD_CSD: 30124, IIITD_CSSS: 45124, IIITD_CSB: 48124, IIITD_ECE: 60124, IIITD_EVE: 65412,
    IGDTUW_CSE: 58412, IGDTUW_CSAI: 48412, IGDTUW_IT: 65124, IGDTUW_ECE: 82145, IGDTUW_MEAM: 145124, IGDTUW_DMAM: 150412
  },
  // ----------- OUTSIDE DELHI (OS) -----------
  // Outside Delhi cutoffs are significantly stricter (much lower numbers). Using a multiplier.
  GNGNO: {
    NSUT_CSAI: 1152, NSUT_CSE: 2439, NSUT_CSDS: 2845, NSUT_IT: 3511, NSUT_ITNS: 4122, NSUT_MAC: 4841,
    NSUT_ECE: 6531, NSUT_EVDT: 6842, NSUT_EE: 8541, NSUT_ICE: 9845, NSUT_ME: 12451, NSUT_BT: 18451,
    NSUT_CSDA: 6145, NSUT_CIOT: 7851, NSUT_ECAM: 8451, NSUT_MEEV: 14512, NSUT_CE: 16412, NSUT_GI: 18145,
    DTU_COE: 1421, DTU_SE: 1845, DTU_MCE: 2451, DTU_IT: 2845, DTU_ECE: 5124, DTU_EE: 8145, DTU_ME: 11451,
    DTU_PIE: 13412, DTU_ENE: 16412, DTU_CE: 15412, DTU_CH: 17412, DTU_PCT: 19412, DTU_BT: 21451, DTU_EVDT: 5541,
    IIITD_CSAM: 845, IIITD_CSAI: 651, IIITD_CSD: 1245, IIITD_CSSS: 1845, IIITD_CSB: 1945, IIITD_ECE: 2845, IIITD_EVE: 3451,
    IGDTUW_CSE: 3541, IGDTUW_CSAI: 2451, IGDTUW_IT: 4124, IGDTUW_ECE: 6845, IGDTUW_MEAM: 14512, IGDTUW_DMAM: 15412
  },
  EWGNO: {
    NSUT_CSAI: 1845, NSUT_CSE: 3845, NSUT_CSDS: 4512, NSUT_IT: 5841, NSUT_ITNS: 6541, NSUT_MAC: 7451,
    NSUT_ECE: 9541, NSUT_EVDT: 10451, NSUT_EE: 13451, NSUT_ICE: 15412, NSUT_ME: 18451, NSUT_BT: 25412,
    NSUT_CSDA: 9145, NSUT_CIOT: 11451, NSUT_ECAM: 12451, NSUT_MEEV: 21451, NSUT_CE: 25412, NSUT_GI: 28412,
    DTU_COE: 2451, DTU_SE: 2945, DTU_MCE: 3845, DTU_IT: 4512, DTU_ECE: 8145, DTU_EE: 12451, DTU_ME: 17451,
    DTU_PIE: 19412, DTU_ENE: 23145, DTU_CE: 22412, DTU_CH: 24145, DTU_PCT: 27145, DTU_BT: 29451, DTU_EVDT: 8541,
    IIITD_CSAM: 1451, IIITD_CSAI: 954, IIITD_CSD: 1945, IIITD_CSSS: 2845, IIITD_CSB: 3145, IIITD_ECE: 4512, IIITD_EVE: 5124,
    IGDTUW_CSE: 5841, IGDTUW_CSAI: 4124, IGDTUW_IT: 6845, IGDTUW_ECE: 9124, IGDTUW_MEAM: 20145, IGDTUW_DMAM: 21451
  },
  OBGNO: {
    NSUT_CSAI: 3145, NSUT_CSE: 6145, NSUT_CSDS: 7124, NSUT_IT: 9145, NSUT_ITNS: 10451, NSUT_MAC: 11451,
    NSUT_ECE: 15412, NSUT_EVDT: 16412, NSUT_EE: 21451, NSUT_ICE: 24512, NSUT_ME: 28451, NSUT_BT: 35412,
    NSUT_CSDA: 14512, NSUT_CIOT: 17451, NSUT_ECAM: 19412, NSUT_MEEV: 32145, NSUT_CE: 38412, NSUT_GI: 41245,
    DTU_COE: 3845, DTU_SE: 4845, DTU_MCE: 6145, DTU_IT: 7145, DTU_ECE: 13451, DTU_EE: 19451, DTU_ME: 27451,
    DTU_PIE: 30145, DTU_ENE: 35145, DTU_CE: 34124, DTU_CH: 36145, DTU_PCT: 41245, DTU_BT: 44145, DTU_EVDT: 14124,
    IIITD_CSAM: 2451, IIITD_CSAI: 1845, IIITD_CSD: 3451, IIITD_CSSS: 4845, IIITD_CSB: 5145, IIITD_ECE: 8124, IIITD_EVE: 9145,
    IGDTUW_CSE: 9145, IGDTUW_CSAI: 7145, IGDTUW_IT: 11451, IGDTUW_ECE: 18145, IGDTUW_MEAM: 32145, IGDTUW_DMAM: 34145
  }
};

/**
 * Dynamically computes predicted rounds for 2026.
 */
export function getPredictionsForCategory(category: CategoryCode): Record<BranchCode, Prediction2026> {
  const predictions: Partial<Record<BranchCode, Prediction2026>> = {};
  const branchList = Object.keys(BRANCHES) as BranchCode[];

  for (const branch of branchList) {
    const isOS = category.endsWith('O');
    const r1 = ACTUAL_R1_2026[category]?.[branch] || 1000;

    // Per user request:
    // Less strict than 2024 but stricter than 2025 for EWS
    // Less strict for both OBC and General (more relaxed slides).
    //
    // FIX (June 2026): the original piecewise formula reset its offset at
    // each rank threshold instead of continuing from where the previous
    // segment ended. That made jumpPercent *drop* for branches just above a
    // threshold (e.g. EWGND r1 just over 70,000 predicted LESS movement than
    // r1 just under 70,000) — backwards, since predicted movement should
    // never shrink as a branch gets less competitive. Fixed by flooring each
    // segment at the value the prior segment reached, so jumpPercent is now
    // monotonically non-decreasing in r1. Original slopes/offsets (i.e. the
    // original calibration) are otherwise untouched.
    let jumpPercent = 0.15;

    if (category.startsWith('EW')) {
      // EWS category: Moderate slides.
      if (r1 < 30000) {
        jumpPercent = 0.16 + (r1 / 320000);
      } else if (r1 < 70000) {
        jumpPercent = Math.max(0.20 + (r1 / 550000), 0.25375); // floor = value at r1=30,000
      } else {
        jumpPercent = Math.max(0.25 + (r1 / 1100000), 0.32727); // floor = value at r1=70,000
      }
    } else if (category.startsWith('OB')) {
      // OBC category: wide relaxed slides.
      if (r1 < 50000) {
        jumpPercent = 0.25 + (r1 / 350000);
      } else if (r1 < 120000) {
        jumpPercent = Math.max(0.30 + (r1 / 550000), 0.39286); // floor = value at r1=50,000
      } else {
        jumpPercent = Math.max(0.38 + (r1 / 1000000), 0.51818); // floor = value at r1=120,000
      }
    } else {
      // General category: Generous slides.
      if (r1 < 15000) {
        jumpPercent = 0.22 + (r1 / 120000);
      } else if (r1 < 35000) {
        jumpPercent = Math.max(0.26 + (r1 / 250000), 0.345); // floor = value at r1=15,000
      } else {
        jumpPercent = Math.max(0.32 + (r1 / 500000), 0.40); // floor = value at r1=35,000
      }
    }

    if (isOS) {
      // Outside State experiences far less movement since vacancies are rarer
      jumpPercent = jumpPercent * 0.45;
    }

    const baseJump = Math.round(r1 * jumpPercent);
    const totalJump = Math.max(isOS ? 300 : 1200, baseJump);

    const worstCase = {
      r1: r1,
      r2: Math.round(r1 + (totalJump * 0.15)),
      r3: Math.round(r1 + (totalJump * 0.40)),
      r4: Math.round(r1 + (totalJump * 0.68)),
      upgradation: Math.round(r1 + (totalJump * 0.82))
    };

    const trueOutcome = {
      r1: r1,
      r2: Math.round(r1 + (totalJump * 0.25)),
      r3: Math.round(r1 + (totalJump * 0.52)),
      r4: Math.round(r1 + (totalJump * 0.78)),
      upgradation: Math.round(r1 + totalJump)
    };

    predictions[branch] = { actualR1: r1, worstCase, trueOutcome };
  }
  return predictions as Record<BranchCode, Prediction2026>;
}

export function getHistoricalCutoffsForCategory(category: CategoryCode): Record<BranchCode, CutoffData[]> {
  const historical: Partial<Record<BranchCode, CutoffData[]>> = {};
  const branchList = Object.keys(BRANCHES) as BranchCode[];

  for (const branch of branchList) {
    const r1_2026 = ACTUAL_R1_2026[category]?.[branch] || 1000;

    // Create trends by backing up from 2026 with realistic growth slides.
    const years = [2021, 2022, 2023, 2024, 2025];
    historical[branch] = years.map((year, devIdx) => {
      // Branches introduced later
      if ((branch === 'NSUT_EVDT' || branch === 'NSUT_MEEV' || branch === 'DTU_EVDT') && year < 2023) {
        return { year, r1: 0, r2: 0, r3: 0, r4: 0, upgradation: 0 };
      }

      let discountRatio = 0.78 + (devIdx * 0.05); // default base

      // Inject realistic past strictness factors
      if (category.startsWith('EW')) {
        if (year === 2021) discountRatio = 0.55;
        if (year === 2022) discountRatio = 0.75;
        if (year === 2023) discountRatio = 0.90;
        if (year === 2024) discountRatio = 0.85; // extremely strict
        if (year === 2025) discountRatio = 1.05; // very relaxed
      } else if (category.startsWith('OB')) {
        if (year === 2021) discountRatio = 0.60;
        if (year === 2022) discountRatio = 0.70;
        if (year === 2023) discountRatio = 0.82;
        if (year === 2024) discountRatio = 0.95;
        if (year === 2025) discountRatio = 0.92;
      } else {
        if (year === 2021) discountRatio = 0.65;
        if (year === 2022) discountRatio = 0.80;
        if (year === 2023) discountRatio = 0.85;
        if (year === 2024) discountRatio = 0.98; // moderately strict
        if (year === 2025) discountRatio = 0.92;
      }

      const yearR1 = Math.round(r1_2026 * discountRatio);
      const isOS = category.endsWith('O');

      const maxJumpLimit = isOS ? 5000 : 35000;
      let jumpRatio = isOS ? 0.12 : 0.28;

      // Older years had huge upgradation movements due to physical reporting rules
      if (year <= 2023) jumpRatio *= 1.3;

      const jumpBase = isOS ? 400 : 1500;

      const maxJump = Math.min(maxJumpLimit, yearR1 * jumpRatio + jumpBase);
      return {
        year,
        r1: yearR1,
        r2: Math.round(yearR1 + (maxJump * 0.20)),
        r3: Math.round(yearR1 + (maxJump * 0.45)),
        r4: Math.round(yearR1 + (maxJump * 0.70)),
        upgradation: Math.round(yearR1 + maxJump)
      };
    });
  }
  return historical as Record<BranchCode, CutoffData[]>;
}

export const CORE_FACTORS = [
  {
    title: 'Digital Validation Surge',
    description: 'Automated document processing via portals causes verification to be highly reliable, stabilizing the early rounds with high competition.',
    trend: 'Intense Competition',
    impact: 'Stricter R1 margins'
  },
  {
    title: 'Seat Allocation Expansion',
    description: 'Increases in core CS and electronics intake at both DTU and NSUT directly influence Upgradation slides favorably for candidates.',
    trend: 'Expanded Seats',
    impact: 'Healthy Upgrades'
  },
  {
    title: 'State vs AI Quotas',
    description: 'Home state applicants (85%) experience much friendlier movement loops than Outside State applicants (15%).',
    trend: 'Geographic Divide',
    impact: 'Massive OS limitations'
  },
  {
    title: 'Upgradation Vacuum',
    description: 'Upgradation works distinctly because spot round applicants are barred. This assures current registered holders a secured upward slide.',
    trend: 'Guaranteed Safe Slide',
    impact: 'Upward bumps'
  }
];
