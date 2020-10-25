import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projectsData = [
  {
    title: "Covid-19 Clinician App",
    img: "covidApp.png",
    description: "React Native and Firebase Mobile Web App",
    demo: "",
    code: "https://github.com/mattachea/Covid-19-App",
    more: "",
  },
  {
    title: "Social Event Calender App",
    img: "covidApp.png",
    description: "React and Java Web App",
    demo: "",
    code: "https://github.com/jhu-oose/2019-group-GrOOSEp",
    more: "",
  },
];
export default function Projects() {
  return (
    <div className="projects">
      <h1 className="title">Projects</h1>
      <div className="blah">
        {projectsData.map((project) => {
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
}
