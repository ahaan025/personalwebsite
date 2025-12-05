// ============================================
// PORTFOLIO DATA - Edit your information here
// ============================================

export const profileData = {
  name: "Ahaan Mehta",
  titles: [
    "Applied Math & CS @ Brown University",
    "Software Engineer",
    "Technical Product Manager",
    "AI/ML Researcher",
    "Space Researcher",
  ],
  bio: "Applied Math, CS, and Behavioral Decision Sciences student at Brown University, focused on deep tech, venture, and space.",
  // Leave empty string if no image, or use: import profileImage from '@assets/your-image.png'
  github: "https://github.com/ahaan025",
  linkedin: "https://linkedin.com/in/ahaan-mehta/",
  email: "ahaan_mehta@brown.edu",
  phone: "+1 (972) 209-3809",
  location: "Providence, RI",
};

export const aboutStats = [
  { value: '4.00', label: 'GPA' },
  { value: '1', label: 'Mission' },
  { value: '0', label: 'Days standing still' },
  { value: '100%', label: 'Committed' },
];

export const aboutParagraphs = [
  "I’m studying Applied Math and CS at Brown. I’m a builder at heart, energized by anything in deep tech, space, or venture.",
  "I’ve done quantum computing research at Cambridge, and now I’m helping capture the first movie of a black hole (Sgr A* and M87) with Brown Space Engineering’s T-REX mission. I’m exploring roles across startups, AI/ML, SWE, and product.",
  "Outside work, I spend my time playing football, watching films, performing magic, playing poker, and finding great Mexican food.",
];

export const experiences = [
  {
    role: "Software & Systems Researcher",
    company: "T-REX (Brown Space Engineering)",
    location: "Providence, RI",
    startDate: "Sep 2025",
    endDate: "Present",
    description: [
      "Designed and implemented Python simulation pipelines to model high-frequency (86 GHz) VLBI baselines and evaluate mission performance for Sgr A* and M87*",
      "Contributed to requirements engineering by co-building the Science Traceability Matrix, mapping high-level NASA science goals to software/system requirements",
      "Co-authored sections of grant proposals like the NASA NIAC proposal, supporting analysis, modeling, and mission concept validation",
    ],
    tags: ["Python", "NumPy", "Space Systems", "NASA"],
  },
  {
    role: "Quantum Information Intern",
    company: "Cambridge Centre of International Research",
    location: "Cambridge, UK",
    startDate: "Mar 2024",
    endDate: "Oct 2024",
    description: [
      "Implemented Python-based numerical simulations (NumPy, QuTiP) to compute CHSH inequality violations and optimize quantum measurement settings",
      "Designed modular code for computing correlation matrices, constructing qubit states, and running sweep-based optimization for Bell-test scenarios",
      "Worked with Dr. Strelchuk on theoretical analysis and debugging computational models of multipartite entanglement and nonlocality",
    ],
    tags: ["Python", "QuTiP", "Quantum Computing", "Research"],
  },
];

export const projects = [
  {
    title: "AI Othello",
    description: "Implemented a Minimax-based AI agent with recursive game-tree search and heuristic evaluation. Designed a modular OOP architecture for move generation, board logic, and game state transitions.",
    tags: ["Java", "Minimax", "OOP", "Game AI"],
    githubUrl: "https://github.com/ahaan025",
  },
  {
    title: "Text Summarization using BART Transformer",
    description: "Implemented and fine-tuned the BART transformer for abstractive NLU summarization tasks. Developed preprocessing pipelines and evaluated with ROUGE metrics vs. CNN/BERT baselines.",
    tags: ["Python", "Transformers", "NLP", "Deep Learning"],
    githubUrl: "https://github.com/ahaan025",
  },
  {
    title: "VLBI Data Compression Analysis",
    description: "Analyzed compression requirements for radio interferometry satellite generating 64 Gb/s data streams. Evaluated 5 compression algorithms on synthetic and real Event Horizon Telescope data.",
    tags: ["Python", "Data Analysis", "Signal Processing", "Space Science"],
    githubUrl: "https://github.com/ahaan025",
  },
  {
    title: "Uber Global Hackathon - ML Analysis",
    description: "Cleaned and engineered features across 10+ datasets using Python. Trained and tuned ML models (Random Forest, Logistic Regression) for demand prediction. Built visualizations and Tableau dashboards.",
    tags: ["Python", "Pandas", "Machine Learning", "Data Viz"],
    githubUrl: "https://github.com/ahaan025",
  },
];

export const publications = [
  {
    title: "Quantum Measurement Optimization for Bell-Test Scenarios",
    authors: ["Ahaan Mehta", "Dr. Strelchuk"],
    highlightAuthor: "Ahaan Mehta",
    venue: "CCIR Research",
    year: "2024",
    abstract: "Implemented numerical simulations using Python and QuTiP to compute CHSH inequality violations and optimize quantum measurement settings for Bell-test scenarios, contributing to understanding of multipartite entanglement.",
    paperUrl: "",
  },
  {
    title: "Comparing Transformer Neural Architectures to Recurrent Neural Networks for Natural Language Understanding",
    authors: ["Ahaan Mehta"],
    highlightAuthor: "Ahaan Mehta",
    venue: "UT Dallas EECS Research Journal",
    year: "2024",
    abstract: "This research report examines the comparative performance of Recurrent Neural Networks (RNNs) and Transformer architectures in Natural Language Understanding (NLU).",
    paperUrl: "https://utdallas.app.box.com/v/su23-res-papers/file/1460493916460"
  }
];

export const leadership = [
  {
    role: "Council Member",
    organization: "Undergraduate Council of Students at Brown University",
    description: [
      "Lead the International Student Committee within Brown's Undergraduate Council of Students, representing the concerns and interests of the international student body",
      "Organize programming, outreach, and dialogue initiatives to improve international students' campus experience",
    ],
  },
  {
    role: "Chief Organizer",
    organization: "TISB Hacks",
    description: [
      "Directed and managed India's largest student-run high school hackathon, overseeing strategy, operations, and execution across 230+ participants from 8 countries",
      "Secured ₹250,000+ in sponsorship and built cross-functional teams to handle logistics, marketing, sponsor outreach, technical problem-setting, and participant engagement",
    ],
  },
];

export const awards = [
  {
    title: "Uber Global Hackathon Finalist",
    organization: "Uber",
    description: "Top 6 teams in the APAC (Asia Pacific).",
  },
  {
    title: "Beaver Computing Challenge Distinction",
    organization: "University of Waterloo",
    description: "Rank #1 in TISB; Rank #2 in India; Top 1% worldwide",
  },
  {
    title: "STEM Merit Scholarship",
    organization: "Cambridge University",
    description: "Awarded $400 in Scholarship",
  },
];

// Social links for footer - add your handles here
export const socialLinks = {
  github: "https://github.com/ahaan025",
  linkedin: "https://linkedin.com/in/ahaan-mehta/",
  email: "ahaan_mehta@brown.edu",
  instagram: "https://www.instagram.com/ahaan_mehta25/", // Add your Instagram URL here, e.g., "https://instagram.com/yourhandle"
  twitter: "", // Add your Twitter/X URL here
  youtube: "", // Add your YouTube URL here
};

// Skills data
export const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java"],
  },
  {
    title: "Libraries & Frameworks",
    skills: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Terminal"],
  },
  {
    title: "Specializations",
    skills: ["DSA", "Machine Learning", "OOP Design", "Quantum Info"],
  },
];

export const additionalInfo = {
  coursework: "Data Structures & Algorithms, OOP in Java, Linear Algebra, Multivariable Calculus, Introduction to Modelling",
  languages: "Multilingual proficiency in English, Hindi, and Punjabi",
  interests: "Soccer, Golf, Poker, Card Magic, Film, Adventure Sports",
};
