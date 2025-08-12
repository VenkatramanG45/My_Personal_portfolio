import ProjectCard from "./ProjectCard";
import Contact from "./Contact";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
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

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 hidden sm:grid'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="block sm:hidden mt-20">
        <Contact />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
