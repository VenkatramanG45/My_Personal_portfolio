import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { getDeviceCapabilities, canRender3D } from "../utils/performance";

const Hero = () => {
  const [deviceCapabilities, setDeviceCapabilities] = useState({
    isMobile: false,
    canRender3D: true,
    webglSupported: true
  });

  useEffect(() => {
    const updateDeviceCapabilities = () => {
      const capabilities = getDeviceCapabilities();
      setDeviceCapabilities(capabilities);
    };

    // Initial check
    updateDeviceCapabilities();

    // Listen for window resize
    window.addEventListener('resize', updateDeviceCapabilities);

    return () => {
      window.removeEventListener('resize', updateDeviceCapabilities);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Venkat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visualizations, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

      {/* Show 3D model if device supports it, otherwise show fallback */}
      {deviceCapabilities.canRender3D ? (
        <ComputersCanvas />
      ) : (
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full h-full bg-gradient-to-b from-primary to-black-100 flex items-center justify-center'>
            <div className='text-center text-white'>
              <h2 className='text-2xl font-bold mb-4'>3D Experience</h2>
              <p className='text-lg opacity-80'>Your device doesn't support 3D rendering</p>
            </div>
          </div>
        </div>
      )}

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
