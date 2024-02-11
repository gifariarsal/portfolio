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
                title="Echoflow"
                type="Front-End Project"
                summary="Echoflow is a web forum for user-generated discussions, featuring thread creation, comments, and an upvote/downvote system, fostering a vibrant community for sharing ideas and interactions."
                img={echoflow}
                link="https://echoflow.vercel.app/"
                github="https://github.com/gifariarsal/echoflow"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="GrocerEasy"
                type="Full-Stack Project"
                img={grocereasy}
                link="https://github.com/gifariarsal/final_project_group_1/tree/development"
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
                link="https://github.com/gifariarsal/metis"
                github="https://github.com/gifariarsal/metis"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Blogging REST API"
                type="Back-End Project"
                img={blogging_rest_api}
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
