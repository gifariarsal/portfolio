import Head from 'next/head';
import React from 'react';
import Certificate from '@/components/about/Certificate';
import Education from '@/components/about/Education';
import Experience from '@/components/about/Experience';
import Skills from '@/components/about/Skills';
import AnimatedText from '@/components/common/AnimatedText';
import Layout from '@/components/common/Layout';
import TransitionEffect from '@/components/common/TransitionEffect';
import AboutMe from '@/components/about/AboutMe';

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
          <AboutMe />
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
