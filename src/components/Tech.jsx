import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <div className='w-full h-full flex items-center justify-center'>
            <img 
              src={technology.icon} 
              alt={technology.name}
              className='w-20 h-20 object-contain'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
