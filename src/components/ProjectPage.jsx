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
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>{project.name}</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="relative pb-[56.25%] h-0">
              <video 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={project.video_link} 
                controls>
              </video>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mt-5">
              <h3 className='text-white font-bold text-[24px]'>Learning Outcomes</h3>
              <ul className='mt-2 text-secondary text-[14px] list-disc list-inside'>
                {project.learning_outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <h3 className='text-white font-bold text-[24px]'>Pros</h3>
              <ul className='mt-2 text-secondary text-[14px] list-disc list-inside'>
                {project.pros.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <h3 className='text-white font-bold text-[24px]'>Cons</h3>
              <ul className='mt-2 text-secondary text-[14px] list-disc list-inside'>
                {project.cons.map((con, index) => (
                  <li key={index}>{con}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <h3 className='text-white font-bold text-[24px]'>Next Steps</h3>
              <ul className='mt-2 text-secondary text-[14px] list-disc list-inside'>
                {project.Next_steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            {project.certificate_link && (
              <div className="mt-5">
                <a href={project.certificate_link} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-[18px] underline">Certificate</a>
              </div>
            )}
            {project.course_learning && project.course_learning.length > 0 && (
              <div className="mt-5">
                <h3 className='text-white font-bold text-[24px]'>Course Learning</h3>
                <ul className='mt-2 text-secondary text-[14px] list-disc list-inside'>
                  {project.course_learning.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.blog_link && (
              <div className="mt-5">
                <a href={project.blog_link} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-[18px] underline">Blog Link</a>
              </div>
            )}
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ProjectPage, "");