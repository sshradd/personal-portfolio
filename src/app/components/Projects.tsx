"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Define an interface for the project data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
  tech: string;
}

// Define an interface for the ProjectTag props
interface ProjectTagProps {
  onClick: (newTag: string) => void;
  name: string;
  isSelected: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Student Advisor and Guidance Engine (SAGE)",
    description: "Oftentimes, advisors get flooded with questions that have simple answers or problems that are easy to resolve. SAGE is an advisor chatbot that can answer your questions quickly and efficiently, so you don’t have to worry about it. On top of this, SAGE can view your profile to help you make decisions about future classes and even generate personalized degree plans. Take the stress out of the logistics and just ask SAGE for help with your inquiries and classes!",
    image: "/images/SAGE.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/acm-projects/Sage",
    previewUrl: "https://github.com/acm-projects/Sage",
    tech: "React.js | Next.js | Javascript | AWS | Langchain",
  },
  {
    id: 2,
    title: "UTDesign EPICS Team Formation",
    description: "The UTDesign EPICS Team Formation project is a full-stack application utilizing React JS, Next.js, Prisma, and SQLite that aims to streamline the team formation process for the UTDesign staff.",
    image: "/images/EPICS.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UTDallasEPICS/Teambuilder",
    previewUrl: "https://github.com/UTDallasEPICS/Teambuilder",
    tech: "React | Next.js | Typescript | Primsa | SQLite",
  },
  {
    id: 3,
    title: "Nostalgio",
    description: "Nostalgio is an app that captures your listening and travel habits to make your travel and music experiences memorable. By linking to your Spotify account, it uses your listening patterns and data on what others have listened to at the same location to predict and recommend music you might enjoy. Nostalgio enhances your daily life and travel experiences by creating a musical map of your journeys, turning ordinary moments into memorable ones with personalized, location-specific music.",
    image: "/images/Nostalgio.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/acm-projects/Nostalgio",
    previewUrl: "https://github.com/acm-projects/Nostalgio",
    tech: "React Native | Spotify API | Google Maps API | AWS Lambda | AWS DynamoDB | AWS Cognito | AWS S3",
  },
  {
    id: 4,
    title: "Lore",
    description: "Lore is an interactive and collaborative storytelling game for anyone who enjoys creating imaginative stories with friends. Players can create groups, start stories, and vote on plot points to compete against players. When stuck, players can use the AI driven suggestions to craft their next plot point. Whether you're bored at a family gathering or finding an activity to do with your close friends, Lore fosters creativity and community, making it easy for users to connect and craft memorable stories together.",
    image: "/images/Lore.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/acm-projects/Lore",
    previewUrl: "https://github.com/acm-projects/Lore",
    tech: "React Native | Expo Go | Amazon Bedrock | Socket.io | Node.js | Express | AWS DynamoDB | AWS Cognito",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
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
            key={project.id}  // Changed from index to project.id for better key uniqueness
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
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
