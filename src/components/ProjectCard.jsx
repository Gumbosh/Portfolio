import { motion } from "framer-motion";
import IconListSmall from "./IconListSmall";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({
  title,
  icons,
  image,
  alt,
  description,
  demo,
  git,
  position,
}) => {
  const alignSelf = position === "start" ? "self-start" : "self-end";
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className={`flex ${alignSelf} lg:self-center flex-col gap-2 md:gap-4 w-[550px] md:w-[500px] sm:w-full rounded-3xl bg-custom-dark-grey px-8 py-4 border border-custom-white border-opacity-5`}
    >
      <div className="flex md:flex-col items-center gap-4">
        <h4 className="text-2xl sm:text-xl xs:text-lg lg:text-center  font-bold">
          {title}
        </h4>
        <IconListSmall icons={icons} />
      </div>
      <img src={image} alt={alt} className="rounded-2xl" />
      <p className="text-custom-light-grey sm:text-sm">{description}</p>
      <a
        target="_blank"
        href={demo}
        className="text-xl sm:text-lg xs:text-md flex gap-2 items-center"
      >
        Live Demo <BiLinkExternal />
      </a>
      <a
        target="_blank"
        href={git}
        className="text-xl sm:text-lg xs:text-md flex gap-2 items-center"
      >
        Code <i className="devicon-github-original"></i>
      </a>
    </motion.article>
  );
};

export default ProjectCard;
