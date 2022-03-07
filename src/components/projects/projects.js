import React from "react";
import ProjectComponent from "./project";
import { ProjectsWrapper, ProjectsHeader } from "./projectsElements";

const Projects = () => {
  return (
    <>
      <ProjectsWrapper id="projects">
        <ProjectsHeader>Some things I've built</ProjectsHeader>
        <ProjectComponent></ProjectComponent>
      </ProjectsWrapper>
    </>
  );
};

export default Projects;
