import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
            h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}

      <span
        className={`
            h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [activeNav, setActiveNav] = React.useState(false);

  const handleNav = () => {
    setActiveNav(!activeNav);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex flex-col items-center justify-center hidden lg:flex"
        onClick={handleNav}
        aria-labelledby="hamburger menu"
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            activeNav ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            activeNav ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            activeNav ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/gifariarsal"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="w-6 mx-3"
            aria-label="Go to Github"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gifariarsal/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="w-6 mx-3"
            aria-label="Go to Linkedin"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
            aria-label="Toggle Dark Mode"
          >
            {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon />}
          </motion.button>
        </nav>
      </div>

      {activeNav && (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/75 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleNav}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleNav}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleNav}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://github.com/gifariarsal"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark"
              aria-label="Go to Github"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gifariarsal/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="w-6 mx-3"
              aria-label="Go to Linkedin"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {mode === 'dark' ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon />
              )}
            </motion.button>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
