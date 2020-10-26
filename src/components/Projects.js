import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projectsData = [
  {
    title: "PillsRx",
    img: "pillsRx.png",
    description:
      "A website for you to keep track of what prescriptions to take when. Check off prescriptions when taken.",
    technologies: "React Redux NodeJs Express MongoDB",
    demo: "",
    code: "https://github.com/mattachea/PillsRX",
    more: "",
  },
  {
    title: "Covid-19 Clinician App",
    img: "covidApp.png",
    description:
      "A mobile web app for physicians, clinicians, and nurses to quickly reference up-to-date information and protocols on COVID-19 treatment.",
    technologies: "React-Native HTML CSS Firebase",

    demo: "",
    code: "https://github.com/mattachea/Covid-19-App",
    more: "",
  },
  {
    title: "Social Event Calendar App",
    img: "whereYouAt2.png",
    description:
      "A web-based social media application for you to locate available friends around you and make events.",
    technologies: "React Javalin Facebook-API Google-Maps-API",
    demo: "",
    code: "https://github.com/jhu-oose/2019-group-GrOOSEp",
    more: "",
  },
];
export default function Projects() {
  return (
    <div className="projects">
      <h1 className="title">Projects</h1>
      <div className="cards">
        {projectsData.map((project) => {
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
}
