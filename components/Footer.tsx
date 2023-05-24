import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <footer className="py-8 px-12 md:px-14">
      <div className="grid grid-rows-3 items-center justify-center gap-y-5 md:grid-cols-3 md:grid-rows-none md:justify-between">
        <h3 className="font-semibold">Developed by vishnuSanskrit</h3>
        <h3 className="place-self-center font-semibold">
          Copyright © {currentYear} VS
        </h3>
        <ul className="flex items-center justify-center gap-10 font-semibold">
          <li>
            <Link
              href="https://github.com/vishnuSanskrit/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vishnu Sanskrit github repository"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/vishnuSanskrit-pramanik-345843125/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vishnu Sanskrit linkedin"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/titas_p"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vishnu Sanskrit twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
