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
            <li>Frameworks/Libraries: Node.js | React.js | Express.js | Unity </li>
            <li>Languages: HTML/CSS, Java, Javascript, Typescript, C, C++, C#</li>
            
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul >
        <li>Univerysit of Texas at Dallas | Bachelors in Computer Science | Graduating Fall 2025</li>
      </ul>
    ),
  },
  {
    title: "Other",
    id: "Other",
    content: (
      <ul className="">
        <li> I love to dance and workout. In my free time I love learning and practicing different styles of dance
            (Bharatanatyam, Bhangra, Jhummar, Hip-Hop, Contemporary, Kutthu, and more).
             I also enjoy creating art and doing photography in my freetime:  
             <Link 
             href='https://www.instagram.com/shraddart/'
             className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-300"> checkout my art page
            </Link>.
        </li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/potato.gif" width={2000} height={1000} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-med">
          a dedicated Computer Science student at the University of Texas at Dallas, set to graduate in Fall 2025. 
          My academic journey has equipped me with proficiency in languages like Java, C, C++, and Javascript and 
          expertise in frameworks such as React, Node.js, Next.js, and Unity. 
          Currently, I am developing an immersive AR/VR project that focuses on educational storytelling, 
          integrating real-time gesture recognition and audio features. 
          I have also created full-stack applications to streamline team formation processes for UT Design and 
          provide virtual academic advising for students through SAGE. With a strong interest in design, 
          I enjoy creating user-friendly interfaces and visually appealing virtual environments. 
          Beyond academics, I actively contribute to the community as the Events Chair for the Society of Asian Scientists and 
          Engineers and as the Media Chair for Women Mentoring Women in Engineering, 
          where I drive engagement and foster professional growth. 
          Additionally, my role as a Project Manager at ACM UTD has allowed me to lead teams and oversee the development of 
          software applications, further honing my leadership and project management skills
          </p>
          <div className="flex flex-row justify-start mt-8 ">
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
              Other{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;