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
            I develop AI-powered applications that empower businesses with the ability to
            automate tasks, improve efficiency, user interfaces and web applications,
            click below link to view my portfolio Agent
          </p>
          <br />
          <a
            href="https://huggingface.co/spaces/venkat23/PortFolio_Agent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-[18px] underline"
          >
            Click Here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
