import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className="fixed z-20 w-full backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-2">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <Link
            className="pl-2 text-2xl font-normal lg:text-3xl lg:font-medium"
            href="/"
            aria-label="Vishnu Sanskrit"
          >
            VS.
          </Link>
        </motion.div>

        <motion.ul
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex items-center gap-2 lg:gap-10"
        >
          <ThemeToggle />
          <li className="flex items-center justify-between text-sm font-medium transition-all duration-300 md:text-base lg:rounded-lg lg:py-2 lg:px-4 lg:text-xl lg:hover:scale-110">
            <Link
              href="https://github.com/vishnuSanskrit/digital-resume/"
              className="coolButton hidden lg:block"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vishnu Sanskrit resume website"
            >
              Resume
            </Link>
            <Link
              href="https://github.com/vishnuSanskrit/digital-resume/"
              className="coolButton block lg:hidden"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vishnu Sanskrit resume website"
            >
              Resume
            </Link>
          </li>
        </motion.ul>
      </div>
    </header>
  );
};

export default Header;
