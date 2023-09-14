import { motion } from "framer-motion";
import IconListBig from "./IconListBig";
import cvPhoto from "../assets/images/cv-photo.png";

const HeroSection = () => {
  return (
    <section className="h-screen bg-hero bg-center bg-cover flex items-center justify-center px-10 sm:px-6">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="border border-custom-white border-opacity-5 bg-custom-dark-grey w-full max-w-[1440px] py-20 px-16 md:py-10 lg:px-6 xs:px-2 rounded-3xl flex flex-col justify-between gap-10"
      >
        <div className="flex md:flex-col md:text-center items-center justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl lg:text-3xl sm:text-2xl xs:text-xl font-bold flex flex-col gap-2 lg:gap-0">
              <span>Hi There! 👋</span>
              <span>I'm Grzegorz Wrzosek</span>
            </h1>
            <p className="text-md lg:text-sm md:text-sm sm:text-xs text-custom-light-grey">
              Passionate about React development and turning ideas into reality.
            </p>
            <ul className="flex gap-4 md:justify-center md:mb-6 text-4xl lg:text-3xl md:text-2xl">
              <li>
                <a target="_blank" href="https://github.com/Gumbosh">
                  <i className="devicon-github-original"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/grzegorz-wrzosek-a4605a291/"
                >
                  <i className="devicon-linkedin-plain"></i>
                </a>
              </li>
            </ul>
          </div>
          <img
            src={cvPhoto}
            alt="cv photo"
            className="w-[300px] h-[300px] xl:w-[250px] xl:h-[250px] lg:w-[200px] lg:h-[200px] sm:h-[150px] sm:w-[150px] xs:h-[120px] xs:w-[120px] object-contain bg-custom-white rounded-full border border-custom-white border-opacity-10"
          ></img>
        </div>
        <div>
          <IconListBig
            icons={[
              <i className="devicon-html5-plain colored"></i>,
              <i className="devicon-css3-plain colored"></i>,
              <i className="devicon-javascript-plain colored"></i>,
              <i className="devicon-react-original colored"></i>,
              <i className="devicon-redux-original colored"></i>,
              <i className="devicon-tailwindcss-plain colored"></i>,
              <i className="devicon-sass-original colored"></i>,
            ]}
          />
        </div>
      </motion.article>
    </section>
  );
};

export default HeroSection;
