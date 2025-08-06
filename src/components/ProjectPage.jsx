import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <div className="w-full h-full">
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h2 className={`${styles.sectionHeadText}`}>{project.name}</h2>
        <div className="mt-4">
          <iframe 
            width="560" 
            height="315" 
            src={project.video_link} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>Learning Outcomes</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.learning_outcomes}</p>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>Pros</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.pros}</p>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>Cons</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.cons}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <p
              key={`${project.name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="mt-5">
          <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-[18px] underline">GitHub Link</a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ProjectPage, "");