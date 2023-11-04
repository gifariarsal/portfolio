import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GrocerEasy from "../../public/images/projects/crypto-screener-cover-image.jpg"

const FeaturedProject = ({ title, type, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-2xl border-1 border-solid border-dark shadow-2xl bg-light p-4">
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark/75">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit Projects
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
    return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border-1 border-solid border-dark shadow-2xl bg-light p-4 relative">
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-2xl font-bold">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Gifari | Projects</title>
        <meta name="description" content="projects page" />
      </Head>
      <main className="flex items-center justify-center w-full flex-col mb-16">
        <Layout className="pt-16">
          <AnimatedText text="Unveiling Creative Horizons" className="mb-16" />
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-12">
              <FeaturedProject
                title="GrocerEasy"
                type="Featured Project"
                summary="GrocerEasy is an online grocery web app"
                img={GrocerEasy}
                link="https://jcwd011001.purwadhikabootcamp.com/"
                github="https://github.com/gifariarsal/final_project_group_1/tree/development"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Metis"
                type="Front-End Project"
                img={GrocerEasy}
                link="https://metisblog.netlify.app/"
                github="https://github.com/gifariarsal/metis"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Blogging"
                type="Back-End Project"
                img={GrocerEasy}
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
