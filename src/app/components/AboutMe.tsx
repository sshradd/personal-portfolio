"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Frameworks/Libraries: Node.js , React.js , Express.js , Unity </li>
        <li>Languages: Python, HTML/CSS, Java, Javascript, Typescript, C, C++, C#, SQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>University of Texas at Dallas | Bachelors in Computer Science | Graduating Fall 2025</li>
      </ul>
    ),
  },
  {
    title: "Other",
    id: "Other",
    content: (
      <ul className="">
        <li>
          I love to dance. In my free time I love learning and practicing different styles of dance
          (Bharatanatyam, Bhangra, Jhummar, Hip-Hop, Contemporary, Kuthu, and more).
          I also enjoy creating art and doing photography in my freetime.  
          <Link 
            href='https://www.instagram.com/shraddart/'
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-300"> checkout my art page </Link>
          and 
          <Link 
            href='https://www.tiktok.com/@vai.shra'
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-300"> checkout my dance page
          </Link>.
        </li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="https://sshradd.github.io/personal-portfolio/images/potato.gif" width={2000} height={1000} alt='potato' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-med">
            Hi, I’m Shraddha Subash! I am a Computer Science student at UT Dallas passionate about creating impactful and intuitive technology. I’ve worked on everything from building CI/CD pipelines and modern web applications during my internships at CBRE and Xforia, to designing immersive AR/VR storytelling experiences as a researcher at UTD’s HeXD Lab. Outside of technical work, I lead teams through ACM at UTD and HackUTD, where I help bring ambitious software projects and large-scale hackathons to life. My interests sit at the intersection of software engineering, product thinking, and user-centered design, and I’m excited to keep exploring how technology can connect people in meaningful ways.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Other")}
              active={tab === "Other"}
            >
              {" "}
              Hobbies{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
