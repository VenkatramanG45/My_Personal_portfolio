import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 
import { styles } from "../styles";
import {
  web,
  creator,
  prediction,
} from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <Link to={link}>
          Go
        </Link>
      </div>
    </motion.div>
  </Tilt>
);

const servicesWithLinks = [
  {
    title: "Web Developer",
    icon: web,
    link: "/web-dev",
  },
  {
    title: "Gen AI",
    icon: creator,
    link: "/gen-ai",
  },
  {
    title: "Machine Learning",
    icon: creator,
    link: "/machine-learning",
  },
];

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <p className={styles.sectionText}>Explore my projects by clicking on the domains below.</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate software developer with strong skills in Python,
        JavaScript, and SQL, and hands-on experience with frameworks like
        Django, React, and LangChain. I specialize in building intelligent,
        scalable applications—from AI-powered chatbots to data-driven web
        platforms. With a keen interest in LLMs, cloud deployment, and modular
        backend design, I strive to deliver solutions that are both efficient
        and user-focused. Let's collaborate and turn your ideas into impactful,
        working systems.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {servicesWithLinks.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} link={service.link} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");