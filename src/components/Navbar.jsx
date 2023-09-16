import CV from "../assets/documents/CV-Grzegorz-Wrzosek.pdf";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="fixed left-1/2 right-1/2 transform -translate-x-1/2 w-full p-8 flex justify-between items-center">
      <button
        className="flex items-center justify-center w-12 h-12 font-bold rounded-full bg-custom-grey border border-custom-white border-opacity-5 md:w-10 md:h-10 md:text-sm"
        onClick={scrollToTop}
      >
        GW
      </button>
      <a
        href={CV}
        download="CV-Grzegorz-Wrzosek.pdf"
        className="bg-custom-white text-custom-dark-grey font-bold px-6 md:px-4 py-2 md:py-1 rounded-xl"
      >
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
