import { motion } from "framer-motion";
import fakeShopImage from "../assets/images/fake-shop.jpg";
import instagramFrontpageImage from "../assets/images/instagram-frontpage.jpg";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="max-w-[1024px] m-auto py-48 flex flex-col gap-20">
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-custom-purple text-xl sm:text-lg text-center">
          » Projects
        </h2>
        <h3 className="text-3xl md:text-2xl sm:text-lg xs:text-md text-center">
          Where pixels, passion, and creativity collide.
        </h3>
      </motion.article>
      <ProjectCard
        title="FakeShop"
        icons={[
          <i className="devicon-react-original colored"></i>,
          <i className="devicon-redux-original colored"></i>,
          <i className="devicon-tailwindcss-plain colored"></i>,
        ]}
        image={fakeShopImage}
        alt="fake shop project showcase photo"
        description="Fake Shop - a dummy e-commerce website that features items fetched
    from fakestoreapi.com, user-friendly navigation, search bar and
    functional cart for a realistic shopping experience."
        demo="https://gw-fakeshop.netlify.app/"
        git="https://github.com/Gumbosh/fake-shop"
        position="start"
      />
      <ProjectCard
        title="Instagram - FrontPage"
        icons={[
          <i className="devicon-html5-plain colored"></i>,
          <i className="devicon-sass-original colored"></i>,
        ]}
        image={instagramFrontpageImage}
        alt="instagram frontpage project showcase photo"
        description=" Instagram FrontPage is a simple Instagram main page clone built
    with HTML and SCSS."
        demo="https://gw-instagram-frontpage.netlify.app/"
        git="https://github.com/Gumbosh/instagram-frontpage"
        position="end"
      />
    </section>
  );
};

export default ProjectsSection;
