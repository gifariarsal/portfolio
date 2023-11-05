import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import aboutImage from "../../public/images/profile/developer-pic-2.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificate from "@/components/Certificate";
import TransitionEffect from "@/components/TransitionEffect";

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
              <p className="font-medium">
                Hi, I&apos;m CodeBucks, a web developer and UI/UX designer with
                a passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty - it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-4 md:col-span-8 relative h-max rounded-2xl bg-light shadow-xl dark:bg-dark p-2 md:order-1">
              <Image
                src={aboutImage}
                alt="Gifari"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>
          {/* <Experience /> */}
          <Education />
          <Certificate />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;
