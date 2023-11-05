import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';
import LogoImage from "../../public/images/logo_gifari.png"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className=" bg-light dark:bg-dark border-2 dark:border-2 flex items-center justify-center w-16 h-16 md:w-12 md:h-12 p-2 rounded-full text-2xl font-bold"
        whileHover={{
          scale: 1.02
        }}
        whileTap={{
          scale: 0.98
        }}
      >
        <Image src={LogoImage} alt="logo" />
      </MotionLink>
    </div>
  );
}

export default Logo