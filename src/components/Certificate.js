import React from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="font-bold text-2xl capitalize sm:text-xl xs:text-lg">{type}</h3>
        <p className="capitalize font-medium text-dark/75 dark:text-light/75 my-2 xs:text-sm">
          {time} | {place}
        </p>
        <p className="font-medium w-full">{info}</p>
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
    <div className="my-48">
      <h2 className="w-full text-8xl font-bold text-center mb-24 md:text-6xl md:mb-16 xs:text-4xl">
        Certificate
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[29px] xs:left-[19px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Google UX Design Professional Certificate"
            time="2022"
            place="Google on Coursera"
            info="I have created a UX design project to accomplish this program, named Tiketic, a mobile app for ordering movie tickets. In this program, we also put a lot of emphasis on the importance of inclusivity. This is because it relates to product design and can reach a wider variety of users."
          />
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
