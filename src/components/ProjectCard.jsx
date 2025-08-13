import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { github } from "../assets";
import { fadeIn } from "../utils/motion";
import useMediaQuery from "../hooks/useMediaQuery";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  id
}) => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Link to={`/project/${id}`}>
        <Tilt
          className='bg-tertiary p-5 rounded-2xl h-full overflow-hidden group'
          tiltMaxAngleX={isMobile ? 0 : 45}
          tiltMaxAngleY={isMobile ? 0 : 45}
          scale={isMobile ? 1 : 1}
          transitionSpeed={isMobile ? 0 : 450}
          tiltEnable={!isMobile}
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          <div className='mt-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300'>
            <div
              className="text-white font-bold text-[18px] underline cursor-pointer"
            >
              View More
            </div>
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;