import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-dark text-light font-semibold py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:dark:shadow-dark xs:shadow-light"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="w-full text-8xl font-bold mt-48 text-center mb-8 md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full bg-dark text-light font-semibold p-4 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light lg:p-2 md:p-1 xs:text-xs xs:p-1"
          whileHover={{ scale: 1.1 }}
        >
          WebDev
        </motion.div>
        {skills.map((skill) => (
          <Skill key={skill.id} {...skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
