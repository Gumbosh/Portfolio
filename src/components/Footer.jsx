const Footer = () => {
  return (
    <footer className="max-w-[1440px] m-auto py-6 flex flex-col items-center gap-2 border-t-custom-light-grey border-t">
      <span>grzegorz.j.wrzosek@gmail.com</span>
      <ul className="flex gap-2 text-2xl">
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
    </footer>
  );
};

export default Footer;
