import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  python,
  django,
  starbucks,
  rag_gpt,
  jobit,
  prediction,
  tripguide,
  chat_room,
  ML_Django,
  stripe,
  Vibe
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Gen AI",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
];

const experiences = [
  {
    title: "Python Developer Intern",
    company_name: "PrepKind",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2024 - February 2025",
    points: [
      "Developing and deploying serverless applications using React.js, Python, Django, and Google Cloud Functions.",
      "Collaborating with a 4-member team to build a cost-effective Interview Bot with speech-to-text and text-to-speech integration using Langchain.",
      "Designing responsive conversational UIs with React and ensuring smooth user interactions across devices.",
      "Contributing to backend architecture planning, log monitoring, and seamless deployment using Firebase and cloud tools.",
    ],
  }
];

export const projectIntroductions = {
  "Gen AI": "The following projects highlight my ability to design intelligent systems, integrate modern technologies, and build scalable applications. From AI-powered chatbots to full-stack inventory systems, each project showcases my hands-on experience with frameworks like Django, React, and LangChain, and demonstrates my problem-solving skills, architectural thinking, and focus on user experience. Repositories and live demos reflect my end-to-end development capabilities—from backend logic to interactive interfaces.",
  "Web Developer": "These projects demonstrate my proficiency in building dynamic and responsive web applications. I have experience with a variety of front-end and back-end technologies, and I'm passionate about creating user-friendly and visually appealing websites.",
  "Machine Learning": "In these projects, I've applied machine learning techniques to solve real-world problems. I have experience with data preprocessing, model training, and evaluation, and I'm always eager to learn new algorithms and techniques."
};

const projects = [
  {
    id: 0,
    name: "Disease Prediction System",
    description:
      "A machine learning-based web app that predicts potential diseases based on user-input symptoms. Built with Scikit-learn for model training and Streamlit for the frontend. The model leverages SVM .",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "pandas",
        color: "orange-text-gradient",
      },
    ],
    image: prediction,
    source_code_link: "https://github.com/VenkatramanG45/Disease_Prediction",
    category: "Machine Learning",
    video_link: "https://www.youtube.com/embed/your_demo_video_id",
    learning_outcomes: [
      "Applied train-test split, One hot encoding, Standardized data.",
      "Gained practical experience in feature engineering and data preprocessing.",
      "Learned to deploy ML models as interactive web apps using Streamlit.",
      "Understood limitations of small datasets and overfitting risks."
    ],
    pros: [
      "Used (SVM) Support Vector Machine for classification.",
      "User-friendly UI with dynamic input fields for symptoms.",
      "Documented steps for reproducibility (requirements.txt, Jupyter notebooks)."
    ],
    cons: [
      "Limited dataset → low accuracy for rare diseases.",
      "No persistent backend (user inputs not saved).",
      "Lacks hyperparameter tuning (used scikit-learn defaults)", 
      "I cannot gain much knowledge in Cross validation, Accuracy Precision and Much more.",
      "Just learned Algorithms like Linear/Logistic regression, Decision Trees, Random Forest, KNN, SVM and Gradient Descent."
    ], 
    Next_steps :["Doesn't satisfied streamlit, Moved to HTML and  CSS ",
      "For strong backend Knowledge I picked Django as my Frameworks.",
    ],
    certificate_link: "",
    course_learning: [],
    blog_link: "",
  },
  {
    id: 1,
    name: "Chat-Room",
    description:
      "A full-stack chatroom web application with user authentication, message saving, and message sending functionality. Built with Django for the backend, SQLlite3 for the database, and custom HTML/CSS for the frontend. Designed to showcase seamless integration between backend logic and dynamic UI rendering.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "sqllite3",
        color: "blue-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
    ],
    image: chat_room,
    source_code_link: "https://github.com/VenkatramanG45/Chat_Room_Website",
    certificate_link:"https://www.udemy.com/certificate/UC-baa85947-f71c-4767-9408-28fd33d4a58e/",
    category: "Web Developer",
    video_link: "https://www.youtube.com/embed/your_demo_video_id",
    learning_outcomes: [
      "Implemented Django's MVT architecture with custom template inheritance.",
      "Used Django ORM for complex database queries (annotate, aggregate).",
      "Built a secure authentication system with CSRF protection.",
      "Learned to structure projects professionally (settings.py splits, reusable apps).",
      "Connected backend models to frontend UI dynamically."
    ],
    pros: [
      "Robust backend with admin panel for product/seller management.",
      "Custom UI (no Bootstrap dependency) with responsive design.",
      "Documented deployment process for Heroku/AWS.",
      "Followed scalable project structure (Maximilian's course best practices)."
    ],
    cons: [
      "No REST API (pure server-side rendering).",
      "Frontend JavaScript interactivity limited (vanilla JS only).",
      "Needs payment gateway integration for real-world use."
    ],
    course_learning:[ 
      "Gained expertise in complex ORM queries, scalable project architecture, and optimized database-to-UI data flows through hands-on implementation.",
      "Completed Maximilian Schwarzmüller's Udemy course to systematically upgrade from basic tutorial knowledge to industry-standard Django development practices."
    ],
    Next_steps: ["Implement real-time notifications.", "Add private messaging feature."],
    blog_link: "",
  },
  {
    id: 2,
    name: "Sports Recommendation System",
    description: "A Django-based web application that recommends sports to users based on their physical attributes and interests, leveraging a content-based filtering model.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
    ],
    image: ML_Django,
    source_code_link: "https://github.com/VenkatramanG45/Django_ML_Connect",
    category: "Machine Learning",
    video_link: "https://www.youtube.com/embed/your_video_id_here",
    learning_outcomes: [
        "Built a content-based recommendation engine using Scikit-learn.",
        "Integrated a machine learning model into a Django web application.",
        "Developed a user-friendly interface for inputting preferences and viewing recommendations."
    ],
    pros: [
        "Provides personalized sports recommendations.",
        "Demonstrates the integration of machine learning with a web framework.",
        "The user interface is simple and intuitive."
    ],
    cons: [
        "The recommendation model is based on a limited set of features.",
        "The dataset used for training is relatively small.",
        "Does not currently support collaborative filtering."
    ],
    Next_steps:["My personal goals is to deploy a Django Project"],
    certificate_link: "",
    course_learning: [],
    blog_link: "",
  },
  {
    id: 3,
    name: "Stripe Payment Integration",
    description: "Built a Stripe payment integration prototype after failing an internship task. Adapted tutorial concepts to create a functional payment system within a Django blog structure, demonstrating rapid skill application.",
    tags: [
       {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "stripe-api",
        color: "purple-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "webhooks",
        color: "pink-text-gradient",
      },
    ],
    image: stripe,
    source_code_link: "https://github.com/VenkatramanG45/Payment_With_Stripe",
    category: "Web Developer",
    blog_link:"https://testdriven.io/blog/django-stripe-tutorial/",
    video_link: "https://www.youtube.com/embed/your_video_id_here",
    learning_outcomes: ["Implemented Stripe's payment processing API with Django backend",
    "Configured secure webhook endpoints for payment verification",
    "Developed a functional checkout interface with error handling",
    "Learned to test payments locally using ngrok and Stripe test mode"],
    pros: [
      "Successfully integrated Stripe Checkout with Django backend",
      "Implemented secure payment processing with webhook verification",
      "Demonstrated ability to adapt tutorials to custom projects"
    ],
    cons: [
      "Scope limited to blog context (not original chatroom requirement)",
      "Basic implementation without advanced Stripe features",
      "Minimal frontend validation for payment errors"
    ],
    Next_steps: ["After this the Era of Chatgpt begins",
      "Saw hackthon statements - Legal Document Summerizer",
      "Tech demands the Skills in Gen AI and I started learning about it"
    ],
    certificate_link: "",
    course_learning: [],
  },
  {
    id: 4,
    name: "RAG Document Chatbot",
    description: "A Retrieval-Augmented Generation (RAG) system that enables conversational Q&A on custom documents. Built to explore cutting-edge GenAI workflows from summarization tasks to full document intelligence.",
    tags: [
      { name: "langchain", color: "blue-text-gradient" },
      { name: "llama2", color: "orange-text-gradient" },
      { name: "chromadb", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
      { name: "faiss", color: "purple-text-gradient" }
    ],
    image: rag_gpt,
    category: "Gen AI",
    website_url: "https://react-authentication-b5129.web.app/",
    video_link: "",
    learning_outcomes: [
      "Designed RAG pipeline: Chunking → Embeddings → VectorDB → Retrieval → LLM Generation",
      "Compared vector stores (FAISS vs. ChromaDB) for performance/accuracy tradeoffs",
      "Engineered prompt templates to control LLM outputs (Llama 2)",
      "Optimized context window usage through strategic document chunking",
      "Deployed interactive UI with Streamlit for non-technical users"
    ],
    pros: [
      "End-to-end implementation of RAG architecture",
      "Modular design allows easy LLM/vectorDB swapping",
      "Handles PDFs, docs, and text inputs",
      "Key Technologies: LangChain, Streamlit, Llama 2, ChromaDB, FAISS, HuggingFace Embeddings"
    ],
    cons: [],
    Next_steps: [
      "Implementing hybrid search (vector + keyword)",
      "Adding conversation memory",
      "Upgrading to GPU-accelerated embeddings"
    ],
    certificate_link: "",
    course_learning: [],
    blog_link: ""
  },
  {
    id: 5,
    name: "Visa Interview Chatbot (Team Project)",
    description: "Contributed as a frontend developer in a 4-member team to build an AI-powered visa interview preparation tool. Gained 7 months of collaborative development experience in an unpaid internship. Role: Frontend Developer. Team Size: 4. Duration: 7 months.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
      { name: "vitest", color: "red-text-gradient" },
      { name: "git", color: "green-text-gradient" }
    ],
    image: Vibe,
    category: "Web Developer",
    video_link: "https://www.youtube.com/embed/your_video_id_here",
    learning_outcomes: [
      "Researched and proposed cost-effective API architecture for chatbot responses",
      "Refactored React components using modern hooks for better maintainability",
      "Implemented Firebase authentication and email notification system",
      "Wrote unit tests covering 80% of UI components (Vitest/React Testing Library)",
      "Participated in iterative PR reviews and agile development cycles",
      "Learned state management best practices, Firebase integration (Auth, Cloud Functions), and Test-driven development fundamentals"
    ],
    pros: [
      "Gained experience with Git collaboration in team environments",
      "Learned PR etiquette and code review processes",
      "Learned balancing quick delivery with maintainable code",
      "Added parameters for Document submission for Tailored QA generation in Backend",
      "Montored logs and catched Document Submission errors and environment Secrets Errors."
    ],
    cons: [
      "Initially slow in implementing changes",
      "Early PR struggles improved through documentation and peer feedback",
      "Gained confidence in making architectural suggestions over time"
    ],
    Next_steps: [
      "Started documenting code changes before PR submission",
      "Adopted pair programming for critical features",
      "Completed Udemy Git/React advanced courses post-internship"
    ],
   
    certificate_link: "",
    course_learning: [],
    blog_link: ""
  }
];

export { services, technologies, experiences, projects };