"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Hello, I&apos;m 
            <br></br>
            <TypeAnimation
              sequence={[
                "Shraddha.",
                2000,
                "",
                1000,
              ]}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-blue-300"
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Aspiring Full-stack developer interested in Web &amp; App development, UX/UI, and AI/ML.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-blue-300 rounded-full px-5 py-2">
                Contact Me
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1KwpL0BjIxuTR0t4k86oHPPhB3A2Ct_PH/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-blue-300 rounded-full px-5 py-2">
                Resume
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 ml-7">
          <Image
            src="/images/headhsot.jpg"
            width={400}
            height={400}
            alt="headshot"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
