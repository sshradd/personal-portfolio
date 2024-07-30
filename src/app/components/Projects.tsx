"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "My personal website!",
    image: "/images/Website.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/sshradd/personal-portfolio",
    previewUrl: "/",
    tech: "React.js | Next.js | Typescript | CSSTailwind | Vercel",
  },
  {
    id: 2,
    title: "Student Advisor and Guidance Engine (SAGE)",
    description: "Oftentimes, advisors get flooded with questions that have simple answers or problems that are easy to resolve. SAGE is an advisor chatbot that can answer your questions quickly and efficiently, so you don’t have to worry about it. On top of this, SAGE can view your profile to help you make decisions about future classes and even generate personalized degree plans. Take the stress out of the logistics and just ask SAGE for help with your inquiries and classes!",
    image: "/images/SAGE.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/acm-projects/Sage",
    previewUrl: "https://github.com/acm-projects/Sage",
    tech: "React.js | Next.js | Javascript | AWS | Langchain",

  },
  {
    id: 3,
    title: "UTDesign EPICS Team Formation",
    description: "The UTDesign EPICS Team Formation project is a full-stack application utilizing React JS, Next.js, Prisma, and SQLite that aims to streamline the team formation process for the UTDesign staff.",
    image: "/images/EPICS.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/UTDallasEPICS/Teambuilder",
    previewUrl: "/https://github.com/UTDallasEPICS/Teambuilder",
    tech: "React | Next.js | Typescript | Primsa | SQLite",

  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}

            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;