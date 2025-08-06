import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const Backend = () => {
  const backendProjects = projects.filter(project => project.category === "Backend Developer");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Backend Development Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects highlight my ability to design intelligent systems,
          integrate modern technologies, and build scalable applications. From AI-powered chatbots to full-stack 
          inventory systems, each project showcases my hands-on experience with frameworks like Django, 
          React, and LangChain, and demonstrates my problem-solving skills, architectural thinking, and focus on user experience.
          Repositories and live demos reflect my end-to-end development capabilities—from backend logic to interactive interfaces.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {backendProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Backend, "backend");