import { styles } from "../styles";
import { socials } from "../constants";
import { resume } from "../assets";

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
          <div className="flex gap-4 mt-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-8 h-8 object-contain"
                />
              </a>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/learnings"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Area of Interest
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="/venky_resume.pdf"
              download="venky_resume.pdf"
              className="flex items-center gap-2 text-white font-bold text-[18px]"
            >
              <img
                src={resume}
                alt="Download Resume"
                className="w-8 h-8 object-contain"
              />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;