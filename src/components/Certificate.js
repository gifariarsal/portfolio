import React from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = React.useRef(null);
  return (
    <li
      ref={ref}
      className="my-6 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold text-2xl capitalize">{type}</h3>
        <p className="capitalize font-medium text-dark/75 my-2">
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
      <h2 className="w-full text-8xl font-bold text-center mb-24">
        Certificate
      </h2>
      <div ref={ref} className="w-[75%%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Google UX Design Professional Certificate"
            time="2022"
            place="Google on Coursera"
            info="I have created a UX design project to accomplish this program, named Tiketic, a mobile app for ordering movie tickets. In this program, we also put a lot of emphasis on the importance of inclusivity. This is because it relates to product design and can reach a wider variety of users."
          />
          {/* <Details
            type="Bachelor of Education in Chemistry Education"
            time="2013-2017"
            place="Yogyakarta State University (UNY)"
            info="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Certificate;
