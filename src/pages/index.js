import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gifari&apos;s Portfolio</title>
        <meta name="description" content="Landing page for Gifari's portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePicture}
                alt="Gifari"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Inspiring Innovation, Crafting Excellence!"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                I&apos;m a dedicated web developer passionate about React.js,
                crafting seamless and user-friendly web experiences. Dive into
                my projects where innovation meets functionality. Let&apos;s
                transform your ideas into interactive reality together!
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target="_blank"
                  className="flex items-center text-lg bg-dark text-light p-2 px-6 rounded-lg hover:bg-light hover:text-dark font-semibold border-2 border-solid border-transparent hover:border-dark"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:muhgifariarsal@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg bg-light text-dark p-2 px-6 rounded-lg hover:bg-dark hover:text-light font-semibold border-2 border-solid border-dark"
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
