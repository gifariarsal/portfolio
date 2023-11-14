import React from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, credential }) => {
  const ref = React.useRef(null);
  return (
    <li
      ref={ref}
      className="my-6 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-2xl capitalize sm:text-xl xs:text-lg">
          {type}
        </h3>
        <p className="capitalize font-medium text-dark/75 dark:text-light/75 my-2 xs:text-sm">
          {time} | {place} | <a href={credential} target="_blank" className="hover:underline">Credential</a>
        </p>
      </motion.div>
    </li>
  );
};

const Certificate = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-40 md:my-20">
      <h2 className="w-full text-8xl font-bold text-center mb-16 md:text-6xl md:mb-8 xs:text-4xl">
        Certificate
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[29px] xs:left-[19px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Full Stack Web Development"
            time="Nov 2023"
            place="Purwadhika Digital Technology School"
            credential=""
          />
          <Details
            type="Meta Front-End Developer Professional Certificate"
            time="Nov 2023"
            place="Meta on Coursera"
            credential="https://coursera.org/share/146e10c5b32deb45805e727b3cf5976a"
          />
          <Details
            type="Google UX Design Professional Certificate"
            time="Jan 2022"
            place="Google on Coursera"
            credential="https://coursera.org/share/06c097e769caa0d15e9502b7240dc182"
          />
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
