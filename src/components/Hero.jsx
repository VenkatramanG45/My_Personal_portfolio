import { styles } from "../styles";
import { mobile } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full mx-auto pt-24 pb-24`}>
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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
            I develop 3D visualizations, user interfaces and web applications
          </p>
        </div>
      </div>
      <img src={mobile} alt="3D computer" className="w-full h-64 object-contain mt-10 opacity-20" />
    </section>
  );
};

export default Hero;
