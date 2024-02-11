import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import {
  blogging_rest_api,
  cashien,
  chronos,
  echoflow,
  grocereasy,
  metis,
  thothes,
} from '@/assets';
import FeaturedProject from '@/components/FeaturedProject';
import Project from '@/components/Project';
import { projectsData } from '@/data';

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
            {projectsData.map((project) =>
              project.featured ? (
                <div className="col-span-12" key={project.id}>
                  <FeaturedProject {...project} />
                </div>
              ) : (
                <div className="col-span-6 sm:col-span-12" key={project.id}>
                  <Project {...project} />
                </div>
              )
            )}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
