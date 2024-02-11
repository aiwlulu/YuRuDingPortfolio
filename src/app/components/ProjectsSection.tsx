"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio website.",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/aiwlulu/YuRuDingPortfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "MindCard",
    description: "Mind mapping as cards, expanding thoughts limitlessly.",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/aiwlulu/MindCard",
    previewUrl: "https://mind-card.vercel.app",
  },
  {
    id: 3,
    title: "Taipei Day Trip",
    description:
      "An E-commerce Tourism Website for exploring attractions and booking sightseeing trips.",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/aiwlulu/taipei-day-trip",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
