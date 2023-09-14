import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section className="max-w-[1440px] m-auto py-48">
      <motion.article
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-[650px] lg:w-[500px] sm:w-auto flex flex-col"
      >
        <h2 className="text-custom-purple text-xl sm:text-lg">» About Me</h2>
        <h3 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl leading-tight">
          I'm a 20-years-old frontend enthusiast based in Gdańsk, Poland,
          currently looking for a full-time job. I want to transform my passion
          into practical experience and collaborate with others to grow as an
          programmer while also bringing exciting projects to life.
        </h3>
      </motion.article>
    </section>
  );
};

export default AboutMeSection;
