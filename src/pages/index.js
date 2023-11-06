import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/images/profile/index_pic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gifari&apos;s Portfolio</title>
        <meta
          name="description"
          content="Landing page for Gifari's portfolio"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 xl:!pt-16 md:!pt-16 sm:!pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full sm:mb-8">
              <Image
                src={profilePicture}
                alt="Gifari"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Inspiring Innovation, Crafting Excellence!"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-6xl lg:!text-center md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I&apos;m a dedicated web developer passionate about React.js,
                crafting seamless and user-friendly web experiences. Dive into
                my projects where innovation meets functionality. Let&apos;s
                transform your ideas into interactive reality together!
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="https://docs.google.com/document/d/1HJrWlBKKlRsnMUkRUQ7mlNnbITG7y182d7ru_5a8O-s/edit?usp=sharing"
                  target="_blank"
                  className="flex items-center text-lg bg-primary text-light p-2 px-6 rounded-lg hover:bg-light hover:text-primary font-semibold border-2 border-solid border-transparent hover:border-primary dark:bg-primaryDark dark:text-dark hover:dark:bg-dark hover:dark:text-primaryDark hover:dark:border-primaryDark md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="https://wa.me/+6283129795688"
                  target="_blank"
                  className="ml-4 text-lg text-dark dark:text-light p-2 px-6 hover:underline font-semibold md:text-base"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
