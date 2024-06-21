import Image from 'next/image';
import React from 'react';
import { about_pic } from '@/assets';

const AboutMe = () => {
  return (
    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
      <div className="col-span-4 md:col-span-8 flex flex-col items-start justify-start md:order-2">
        <h2 className="mb-4 text-2xl font-bold text-dark/75 dark:text-light/75">
          About Me
        </h2>
        <p className="font-medium mb-8 !leading-7">
          I am dedicated to mastering web development, continuously seeking out
          new learning opportunities and embracing challenges. Each project is a
          chance to refine my skills and innovate, fueling my professional
          growth.
        </p>
        <p className="font-medium !leading-7">
          I specialize in React JS, captivated by its capabilities for creating
          dynamic and responsive user interfaces. My passion for continuous
          learning drives my goal to excel as a web developer, crafting
          exceptional online experiences. Thank you for visiting my page! Join
          me in exploring the exciting opportunities of web development.
        </p>
      </div>
      <div className="w-[70%] col-span-4 md:col-span-8 relative h-max rounded-2xl bg-light shadow-xl dark:bg-dark p-2 md:order-1 mx-auto">
        <Image
          src={about_pic}
          alt="Gifari"
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
    </div>
  );
};

export default AboutMe;
