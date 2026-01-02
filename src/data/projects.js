export const projects = [
  {
    id: 1,
    slug: "majesstystays",
    title: "Majesstystays",
    month: "Jan",
    year: 2025,
    domain: "AI / Real Estate",
    description:
      "AI-powered real estate recommendations with predictive analytics and pricing intelligence.",
    image: "/assets/images/projects/majessstays.png",
    longDescription: `Majesstystays leverages artificial intelligence to revolutionize real estate discovery and investment decisions.

The platform provides:
- AI-powered property recommendations tailored to user preferences and investment profiles
- Predictive analytics for property market trends and demand forecasting
- Intelligent pricing intelligence based on historical data and market dynamics
- Automated valuation models for accurate property assessment
- Risk analysis and investment scoring
- Market insights and comparative analysis

Outcomes:
- Significantly improved property matching accuracy
- Data-driven pricing strategies for stakeholders
- Enhanced user experience through personalized recommendations`,
    problem:
      "Real estate decisions are often made without sufficient market intelligence and data-driven insights, leading to suboptimal investment choices.",
    solution:
      "Build an AI system that analyzes property data, market trends, and user preferences to provide intelligent recommendations and pricing insights.",
    techStack: ["Machine Learning", "Predictive Analytics", "Data Engineering", "Python", "TensorFlow"],
    outcomes: "Improved accuracy in property recommendations and pricing intelligence",
    featured: true,
  },
  {
    id: 2,
    slug: "careergenai",
    title: "CareerGenAI",
    month: "Feb",
    year: 2025,
    domain: "AI / EdTech",
    description:
      "LLM-powered AI career guidance platform with resume intelligence and future skill mapping.",
    image: "/assets/images/projects/careergenai.png",
    longDescription: `CareerGenAI harnesses the power of Large Language Models to provide personalized career guidance and skill development pathways.

Key features:
- LLM-based resume analysis and optimization recommendations
- Intelligent career path mapping based on skills and aspirations
- Future skill identification and learning recommendations
- Job market intelligence and trend analysis
- Personalized career counseling through conversational AI
- Skill gap analysis and remediation suggestions
- Industry insights and salary benchmarking

Outcomes:
- Users receive personalized career guidance tailored to their background
- Clearer understanding of future skill requirements in their field
- Data-driven approach to career development and learning`,
    problem:
      "Job seekers and professionals lack personalized guidance on career development, skill requirements, and market opportunities.",
    solution:
      "Create an LLM-powered platform that analyzes resumes, understands market trends, and provides intelligent career recommendations.",
    techStack: ["Large Language Models", "NLP", "Generative AI", "Python", "Langchain"],
    outcomes: "Personalized career guidance at scale with resume intelligence",
    featured: true,
  },
  {
    id: 3,
    slug: "genai-poshan-yojana",
    title: "GenAI Poshan Yojana",
    month: "Mar",
    year: 2025,
    domain: "AI / Public Welfare",
    description:
      "AI-based monitoring for school sanitation, food quality, and student wellness in real time.",
    image: "/assets/images/projects/genai-poshan.png",
    longDescription: `GenAI Poshan Yojana leverages generative AI and computer vision to ensure comprehensive monitoring of school nutrition and sanitation standards.

System capabilities:
- Real-time monitoring of sanitation conditions using computer vision
- AI-powered food quality assessment and verification
- Student wellness tracking and health metrics analysis
- Compliance monitoring against nutritional standards
- Automated reporting and alerts for non-compliance
- Historical data analysis for trend identification
- Dashboard for administrators and stakeholders

Outcomes:
- Improved sanitation and hygiene standards in schools
- Better nutritional quality assurance for students
- Real-time visibility into student wellness metrics
- Data-driven insights for policy improvement`,
    problem:
      "Manual monitoring of school sanitation, food quality, and student wellness is time-consuming and inconsistent across institutions.",
    solution:
      "Deploy AI and computer vision systems to automatically monitor and verify sanitation, food quality, and student health metrics.",
    techStack: ["Computer Vision", "Generative AI", "Image Processing", "Python", "OpenCV"],
    outcomes: "Real-time monitoring of school welfare parameters with automated compliance tracking",
    featured: true,
  },
  {
    id: 4,
    slug: "6g-security-project",
    title: "6G Security Project",
    month: "Apr",
    year: 2025,
    domain: "AI / Cybersecurity",
    description:
      "Federated AI framework ensuring privacy and security for IoT and 6G ecosystems.",
    image: "/assets/images/projects/6g-security.png",
    longDescription: `6G Security Connect implements a federated AI framework designed to protect IoT and emerging 6G ecosystems while preserving data privacy.

Framework features:
- Federated learning architecture for distributed model training
- Privacy-preserving AI algorithms and encryption standards
- IoT device security monitoring and threat detection
- 6G network vulnerability assessment and remediation
- Decentralized data processing and analysis
- Anomaly detection across distributed networks
- Compliance with privacy regulations and standards

Outcomes:
- Robust security for IoT and 6G networks without centralizing sensitive data
- Privacy-preserving intelligence gathering across devices
- Scalable security framework for next-generation networks`,
    problem:
      "IoT and 6G ecosystems face security challenges while needing to maintain user privacy and avoid centralized data collection.",
    solution:
      "Develop a federated AI framework that provides security and threat detection while preserving privacy through distributed learning.",
    techStack: ["Federated Learning", "Cryptography", "IoT Security", "Python", "TensorFlow Federated"],
    outcomes: "Privacy-preserving security framework for IoT and 6G ecosystems",
    featured: true,
  },
  {
    id: 5,
    slug: "crop-yield-prediction",
    title: "Crop Yield Prediction",
    month: "May",
    year: 2025,
    domain: "AI / Agriculture",
    description:
      "AI-driven crop yield prediction using phenotypic traits and data analytics.",
    image: "/assets/images/projects/crop-yield.png",
    longDescription: `Crop Yield Prediction harnesses AI and machine learning to provide accurate predictions of crop yields based on phenotypic traits and environmental factors.

System capabilities:
- Machine learning models for yield prediction
- Phenotypic trait analysis and correlation studies
- Environmental factor integration (weather, soil, water)
- Historical data analysis for pattern identification
- Recommendation engine for agricultural practices
- Risk assessment for crop failures
- Farmer-facing dashboard with actionable insights

Outcomes:
- Accurate yield predictions enabling better farm planning
- Data-driven recommendations for optimizing agricultural practices
- Reduced uncertainty in crop planning and resource allocation`,
    problem:
      "Farmers lack data-driven tools to predict crop yields and optimize agricultural practices based on comprehensive trait analysis.",
    solution:
      "Build AI models that analyze phenotypic traits, environmental conditions, and historical data to predict crop yields and recommend best practices.",
    techStack: ["Machine Learning", "Data Analytics", "Statistical Analysis", "Python", "Scikit-learn"],
    outcomes: "Accurate crop yield predictions enabling data-driven agricultural planning",
    featured: false,
  },
  {
    id: 6,
    slug: "ethereum-fraud-detection",
    title: "Ethereum Fraud Detection",
    month: "June",
    year: 2025,
    domain: "AI / Blockchain",
    image: "/assets/images/projects/ethereum-fraud.png",
    description:
      "Detection of normal and fraudulent Ethereum transactions using labeled datasets.",
    longDescription: `Ethereum Fraud Detection applies machine learning to identify and classify normal and fraudulent transactions on the Ethereum blockchain.

Key components:
- Transaction analysis and classification models
- Pattern recognition for fraud detection
- Real-time monitoring of blockchain transactions
- Anomaly scoring and risk assessment
- Integration with blockchain data sources
- Labeled dataset training and model validation
- Visualization and reporting of suspicious activity

Outcomes:
- Effective identification of fraudulent transaction patterns
- Enhanced security for blockchain ecosystem participants
- Data-driven approach to fraud prevention`,
    problem:
      "The Ethereum network faces challenges in detecting fraudulent transactions, requiring automated analysis of blockchain data.",
    solution:
      "Train machine learning models on labeled transaction datasets to identify fraudulent patterns and flag suspicious activity.",
    techStack: ["Machine Learning", "Blockchain Analysis", "Classification Models", "Python", "XGBoost"],
    outcomes: "Improved detection of fraudulent Ethereum transactions using supervised learning",
    featured: false,
  },
  {
    id: 7,
    slug: "bailgada-trading",
    title: "Bailgada Trading",
    month: "July",
    year: 2025,
    domain: "Digital Platforms / Rural Innovation",
    description:
      "Smart digital platform for traditional rural trading.",
    image: "/assets/images/projects/bailgada.png",
    longDescription: `Bailgada Trading is a smart digital platform designed to modernize traditional rural trading practices while preserving local commerce.

Platform features:
- Digital marketplace for rural traders and buyers
- Transaction management and payment processing
- Inventory tracking and management
- Price discovery and market information
- Quality assurance and verification systems
- Logistics coordination for rural areas
- Community-based rating and trust systems
- Analytics for market insights

Outcomes:
- Increased market access for rural traders
- Better price transparency and market information
- Simplified transactions through digital tools
- Strengthened rural commerce ecosystem`,
    problem:
      "Traditional rural trading lacks modern infrastructure for transparent transactions, price discovery, and market connectivity.",
    solution:
      "Create a digital platform that brings transparency, efficiency, and connectivity to rural trading while respecting traditional practices.",
    techStack: ["Web Platform", "Mobile App", "Payment Integration", "React", "Node.js"],
    outcomes: "Modernized rural trading with improved market access and transparency",
    featured: false,
  },
];
