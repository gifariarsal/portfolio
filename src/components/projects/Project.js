import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "../common/Icons";

const FramerImage = motion(Image);

const Project = ({ title, type, img, link, github }) => {
  const outerLink = link || github;

  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl xs:rounded-xl border-1 border-solid border-dark shadow-2xl bg-light dark:bg-dark p-4 relative">
      <Link
        href={outerLink}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-bold text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={outerLink}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        <div
          className={`w-full mt-2 flex items-center ${
            link ? "justify-between" : "justify-end"
          }`}
        >
          {link && (
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Visit
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
