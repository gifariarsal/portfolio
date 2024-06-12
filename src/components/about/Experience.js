import React from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "../common/LiIcon";

const Details = ({ position, company, companyLink, time, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <p className="capitalize font-medium text-dark/75 dark:text-light/75 my-2 xs:text-sm">
          {time}
        </p>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "center start"],
    });
  return (
    <div className="my-40 md:my-20">
      <h2 className="w-full text-8xl font-bold text-center mb-16 md:text-6xl md:mb-8 xs:text-4xl">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            companyLink="https://www.chromatiq.id/"
            company="Chromatiq"
            time="Feb 2024 - Present"
            work="I am responsible for developing website projects received by the agency from clients. This involves determining the design experience, coding to develop the website, and even engaging in copywriting. I support project goals by contributing to all stages of development."
          />
          <Details
            position="Chemistry Tutor"
            companyLink="https://www.quipper.com/id/"
            company="Quipper"
            time="Feb 2019 - Jun 2023"
            work="I supported students by assisting with assignments, explaining complex problem-solving methods, and ensuring prompt responses to their needs. I guided them through challenges, simplified concepts, and tailored my approach for individual learning, fostering an interactive environment. My focus on effective communication and adaptability enhanced understanding of complex subjects."
          />
          <Details
            position="Tutor Test Center"
            companyLink="https://pahamify.com/"
            company="Pahamify"
            time="Feb 2021 - May 2021"
            work="I focused in producing detailed problem-solving videos, delved into complex problem concepts, meticulously planned and delivered clear explanations. Collaborated closely with the Quality Control team, ensuring the videos met stringent content standards, resulting in high-quality educational materials tailored to our audience's needs."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
