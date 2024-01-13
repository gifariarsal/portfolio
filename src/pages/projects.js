import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import grocereasy from "../../public/images/projects/grocereasy.png";
import metis from "../../public/images/projects/metis.png";
import bloggingrestapi from "../../public/images/projects/blogging_rest_api.png";
import chronos from "../../public/images/projects/chronos.png";
import cashien from "../../public/images/projects/cashien.png";
import thothes from "../../public/images/projects/thothes.png";
import TransitionEffect from "@/components/TransitionEffect";

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
        <span className="text-primary dark:text-primaryDark font-bold text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">
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

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl xs:rounded-xl border-1 border-solid border-dark shadow-2xl bg-light dark:bg-dark p-4 relative">
      <Link
        href={link}
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
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Gifari | Projects</title>
        <meta name="description" content="projects page" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center justify-center w-full flex-col mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Unveiling Creative Horizons"
            className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="GrocerEasy"
                type="Full-Stack Project"
                summary="Grocereasy is an online grocery web app that simplifies the shopping experience. With several store locations offering the same products, users are provided with recommendations to receive services from the store nearest to them."
                img={grocereasy}
                link="https://jcwd011001.purwadhikabootcamp.com/"
                github="https://github.com/gifariarsal/final_project_group_1/tree/development"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Chronos"
                type="Full-Stack Project"
                img={chronos}
                link="https://github.com/gifariarsal/chronos_client"
                github="https://github.com/gifariarsal/chronos_client"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Thothes"
                type="Front-End Project"
                img={thothes}
                link="https://thothes.vercel.app"
                github="https://github.com/gifariarsal/personal-notes-v2"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Cashien"
                type="Full-Stack Project"
                img={cashien}
                link="https://github.com/gifariarsal/group1/tree/development"
                github="https://github.com/gifariarsal/group1/tree/development"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Metis"
                type="Front-End Project"
                img={metis}
                link="https://metisblog.netlify.app/"
                github="https://github.com/gifariarsal/metis"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Blogging REST API"
                type="Back-End Project"
                img={bloggingrestapi}
                link="https://documenter.getpostman.com/view/27216835/2s946pYUD5"
                github="https://github.com/gifariarsal/blogging_backend"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
