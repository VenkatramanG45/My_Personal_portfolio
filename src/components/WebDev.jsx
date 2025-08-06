import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects, projectIntroductions } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";

const WebDev = () => {
  const webDevProjects = projects.filter(project => project.category === "Web Developer");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Web Development Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {projectIntroductions["Web Developer"]}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {webDevProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WebDev, "web-dev");