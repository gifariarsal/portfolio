import React from 'react';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const FramerImage = motion(Image);

const FeaturedProject = ({ title, type, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-2xl border-1 border-solid border-dark shadow-2xl bg-light dark:bg-dark p-4 lg:flex-col xs:rounded-xl">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
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
      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
        <div className="w-full flex items-center justify-between">
          <span className="text-primary dark:text-primaryDark font-bold text-xl xs:text-base">
            {type}
          </span>
          <p className='text-light bg-primary dark:text-dark dark:bg-primaryDark px-4 py-2 rounded-lg text-sm font-bold'>Featured</p>
        </div>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark/75 dark:text-light/75 sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 transition duration-300 rounded-lg bg-dark text-light border-2 border-solid border-transparent dark:bg-light dark:text-dark hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Projects
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
