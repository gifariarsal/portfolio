import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificate from "@/components/Certificate";
import TransitionEffect from "@/components/TransitionEffect";
import { about_pic } from "@/assets";

const about = () => {
  return (
    <>
      <Head>
        <title>Gifari | About Me</title>
        <meta name="description" content="about page" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center justify-center w-full flex-col dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Endlessly Curious, Forever Learning!"
            className="mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 md:col-span-8 flex flex-col items-start justify-start md:order-2">
              <h2 className="mb-4 text-2xl font-bold text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium mb-4">
                I&apos;m in the midst of an exciting career shift, diving into
                the dynamic world of web development. I firmly believe
                continuous learning is the key to success, driving my dedication
                as I immerse myself in various resources to broaden my
                expertise. I embrace challenges as opportunities for personal
                and professional growth, approaching each project with
                enthusiasm to refine my skills and create innovative solutions.
              </p>
              <p className="font-medium">
                My main focus is React JS, a programming language that
                captivates me with its power in building dynamic and responsive
                user interfaces. I am dedicated to excelling as a proficient web
                developer, driven by my passion for perpetual learning and
                evolving in this ever-changing landscape. My goal is to craft
                exceptional online experiences and make meaningful
                contributions. Thank you for visiting my page! Join me on this
                thrilling adventure in web development, exploring boundless
                opportunities in the digital realm!
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
          <Experience />
          <Education />
          <Certificate />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
