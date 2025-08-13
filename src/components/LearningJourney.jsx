import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const LearningJourney = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Learning Path
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Learning Journey.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {/* Placeholder for learning content */}
        <p className='text-white text-[18px] leading-[30px]'>
          This section will detail my continuous learning journey, including courses, certifications, personal projects, and new technologies I'm exploring.
        </p>
        <p className='text-white text-[18px] leading-[30px] mt-4'>
          Stay tuned for updates!
        </p>
      </div>
    </>
  );
};

export default SectionWrapper(LearningJourney, "learning");