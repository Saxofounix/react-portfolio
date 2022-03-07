import React from "react";
import {
  Project,
  ProjectImage,
  ProjectInfo,
  ProjectInfoHeader,
  ProjectInfoDescription,
  ProjectInfoDescriptionDiv,
  ProjectInfoTechnologies,
  ProjectInfoLinks,
  Github,
  ExternalLink,
  Link,
} from "./projectsElements";
import { projects } from "./data";

const ProjectComponent = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <Project reverse={project.reverse} key={project.id} img={project.img}>
            <ProjectImage img={project.img} />
            <ProjectInfo reverse={project.reverse}>
              <ProjectInfoHeader>{project.name}</ProjectInfoHeader>
              <ProjectInfoDescriptionDiv>
                <ProjectInfoDescription>{project.desc}</ProjectInfoDescription>
              </ProjectInfoDescriptionDiv>
              <ProjectInfoLinks>{project.technologies}</ProjectInfoLinks>
              <ProjectInfoTechnologies>
                <Link href={project.link_git} target="_blank">
                  <Github />
                </Link>
                <Link href={project.link} target="_blank">
                  <ExternalLink />
                </Link>
              </ProjectInfoTechnologies>
            </ProjectInfo>
          </Project>
        );
      })}
    </>
  );
};

export default ProjectComponent;
