import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectsWrapper = styled.div`
  margin: 0 7rem;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const ProjectsHeader = styled.h1`
  margin: 2rem 1rem;
  color: #d3d3d3;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  margin-bottom: 8rem;

  @media screen and (max-width: 768px) {
    background-image: url(${(img) => img.img});
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 0 2000px rgba(8, 23, 44, 0.9);
    margin-bottom: 3rem;
  }
`;

export const ProjectImage = styled.div`
  flex: 3;
  width: 100%;
  height: 350px;
  margin: 0 1rem;
  background-image: url(${(img) => img.img});
  background-size: cover;
  background-position: center;
  border-radius: 0.25rem;
  transition: ease 250ms;
  box-shadow: inset 0 0 0 2000px rgba(255, 16, 240, 0.4);

  :hover {
    box-shadow: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProjectInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ reverse }) => (reverse ? "flex-start" : "flex-end")};

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const ProjectInfoHeader = styled.h1`
  margin-bottom: 1rem;

  color: #d3d3d3;

  @media screen and (max-width: 768px) {
    padding: 3rem 2rem 0 2rem;
  }
`;

export const ProjectInfoDescriptionDiv = styled.div`
  background: #112240;
  border-radius: 0.25rem;
  padding: 2rem 1rem;
  width: 130%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background: transparent;
    padding: 0 2rem;
  }
`;
export const ProjectInfoDescription = styled.p`
  color: #97a2c1;
  font-size: 110%;

  @media screen and (max-width: 768px) {
    color: rgb(168, 178, 209);
  }
`;

export const Github = styled(FaGithub)`
  font-size: 2rem;
  transition: 0.3s ease;

  :hover {
    transform: scale(1.2);
    color: #ff10f0;
  }
`;
export const ExternalLink = styled(FaExternalLinkAlt)`
  font-size: 2rem;
  transition: 0.3s ease;

  :hover {
    transform: scale(1.2);
    color: #ff10f0;
  }
`;

export const ProjectInfoTechnologies = styled.div`
  padding: 1rem 0;
  color: #8892b0;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const ProjectInfoLinks = styled.p`
  color: #8892b0;
  @media screen and (max-width: 768px) {
    padding: 0rem 2rem 0rem 2rem;
  }
`;

export const Link = styled.a`
  color: #8892b0;
  text-decoration: none;
`;
