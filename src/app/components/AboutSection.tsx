"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <>
        <h3 className="font-bold text-lg">Front-End</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>JavaScript / TypeScript</li>
          <li>HTML & CSS / SCSS</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>

        <h3 className="font-bold text-lg">Back-End</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Python Flask</li>
          <li>MSSQL / MySQL / Firebase</li>
          <li>AWS EC2</li>
        </ul>

        <h3 className="font-bold text-lg">Dev Tools</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Git / GitHub</li>
          <li>Jest</li>
          <li>ESLint</li>
        </ul>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <p className="font-bold">WeHelp Bootcamp</p>
          <p>Web Trainee</p>
          <p>2023.07 - 2023.12</p>
        </li>
        <br />
        <li>
          <p className="font-bold">National Taipei University of Business</p>
          <p>Accounting Information</p>
          <p>2013.09 - 2017.06</p>
        </li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTabContent = TAB_DATA.find((t) => t.id === tab)?.content;

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            5+ years of SAP experience, involved in 5 implementation projects
            with expertise in SAP FI. Completed a 6-month programming course,
            created a mind mapping web tool with React and Next.js and a
            full-stack Taipei tourism site. Eager to transition to front-end
            engineering.
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
          </div>
          <div className="mt-8">
            {currentTabContent || <p>No content found.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
