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
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Gen AI",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
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


const projects = [
  {
    name: "RAG-GPT",
    description:
      "AI-powered chatbot built using RAG (Retrieval-Augmented Generation) with LLaMA 2, LangChain, and Chroma DB to provide accurate, context-aware responses from custom document data.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "faiss",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Vibe Coding",
    description:
      "Developed a responsive conversational UI using React for an AI-powered Interview Bot, ensuring seamless user experience and integration with backend APIs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "AI-Tools",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chat-Room",
    description: "Web-based chatroom application built with Django, offering real-time messaging and a responsive UI for seamless user interaction.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
