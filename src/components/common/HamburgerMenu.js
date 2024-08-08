import React from "react";

const HamburgerMenu = ({ activeNav, handleNav }) => {
  return (
    <button
      className="flex flex-col items-center justify-center hidden lg:flex"
      onClick={handleNav}
      aria-labelledby="hamburger menu"
    >
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
          activeNav ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
          activeNav ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
          activeNav ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
