import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/images/profile/developer-pic-1.png";
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
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
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
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center text-lg bg-dark text-light p-2 px-6 rounded-lg hover:bg-light hover:text-dark font-semibold border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:muhgifariarsal@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg bg-light text-dark p-2 px-6 rounded-lg hover:bg-dark hover:text-light font-semibold border-2 border-solid border-dark dark:border-light dark:bg-dark dark:text-light dark:hover:border-dark dark:hover:bg-light dark:hover:text-dark md:p-2 md:px-4 md:text-base"
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
