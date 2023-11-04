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

const Education = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-48">
      <h2 className="w-full text-8xl font-bold text-center mb-24">Education</h2>
      <div ref={ref} className="w-[75%%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Full Stack Web Development Bootcamp"
            time="2023"
            place="Purwadhika Digital Technology School"
            info="I successfully completed a comprehensive bootcamp involving in-person classes, coding challenges, mini projects, exams, final project, and collaborative team work. This diverse experience sharpened my technical skills, problem-solving, and teamwork abilities, preparing me for a successful career in information technology"
          />
          <Details
            type="Bachelor of Education in Chemistry Education"
            time="2013-2017"
            place="Yogyakarta State University (UNY)"
            info="During my college years, I was actively involved in student organizations, including the Student Association and the Student Executive Board. For my undergraduate thesis, I conducted research on the development of an Android application as an educational learning platform. These experiences honed my leadership skills, teamwork, and research abilities, while fostering creativity in educational technology development."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
