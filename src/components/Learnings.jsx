import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Learnings = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Learning Journey</p>
        <h2 className={`${styles.sectionHeadText}`}>What I'm Learning & Exploring.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          This is a snapshot of my current learning path and future interests.
        </motion.p>
      </div>

      <div className='mt-12 flex flex-col gap-8'>
        {/* Python & Django Section */}
        <div className="learning-section">
          <h3 className="text-xl font-bold text-white">Python & Django</h3>
          <p className="mt-2 text-secondary">
            As part of learning Python, I've learned Django and built websites with the help of YouTube, GitHub, AI tools, and blogs.
            My plan is to continue by focusing on Test-Driven Development (TDD) in Django and exploring technologies like Celery, Redis, and Microservices.
          </p>
        </div>

        {/* React Section */}
        <div className="learning-section">
          <h3 className="text-xl font-bold text-white">React</h3>
          <p className="mt-2 text-secondary">
            To continue my journey with React, I plan to explore the Co-pilot kit for Agentic UI Development.
          </p>
        </div>

        {/* Gen AI Section */}
        <div className="learning-section p-4 border border-purple-500 rounded-lg">
          <h3 className="text-xl font-bold text-white flex items-center">
            Generative AI
            <span className="ml-3 bg-purple-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Current Personal Interest</span>
          </h3>
          <p className="mt-2 text-secondary">
            I am keenly interested in Gen AI and plan to explore FastAPI, LangChain, LLMs, VectorDBs, and the related cloud infrastructure. This is a key area of focus for me.
          </p>
        </div>

        {/* Other Technologies Section */}
        <div className="learning-section p-4 border border-gray-600 rounded-lg">
          <h3 className="text-xl font-bold text-white flex items-center">
            Other Technologies
            <span className="ml-3 bg-gray-700 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Priority 2</span>
          </h3>
          <p className="mt-2 text-secondary">
            I am also open to roles that involve ETL, Java, or other JavaScript-specific tech stacks.
          </p>
        </div>

        {/* Current Activities Section */}
        <div className="learning-section">
          <h3 className="text-xl font-bold text-white">Current Activities</h3>
          <p className="mt-2 text-secondary">
            I am currently exploring open-source projects and learning how to contribute. I've also started using Reddit and Discord to seek help and engage with the developer community.
          </p>
        </div>

        {/* Long-term Goal Section */}
        <div className="learning-section">
          <h3 className="text-xl font-bold text-white">Long-term Goal (3-5 Years)</h3>
          <p className="mt-2 text-secondary">
            In the next 3 to 5 years, I aspire to be part of a team working on AI-driven IoT application development.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Learnings, "learnings");
