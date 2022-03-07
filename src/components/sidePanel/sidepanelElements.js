import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

export const PanelWrapper = styled.div`
  height: 100%;
  position: fixed;
  width: 50px;
  background: #0a192f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  padding-left: 4rem;
  margin: 0.5rem;
  text-decoration: none;
`;

export const LI = styled(FaLinkedin)`
  font-size: 2rem;
  color: #8892b0;
  transition: 0.3s ease;

  :hover {
    transform: scale(1.2);
    color: #ff10f0;
  }
`;
export const GH = styled(FaGithub)`
  font-size: 2rem;
  color: #8892b0;
  transition: 0.3s ease;

  :hover {
    transform: scale(1.2);
    color: #ff10f0;
  }
`;
export const MAIL = styled(FaMailBulk)`
  font-size: 2rem;
  color: #8892b0;
  transition: 0.3s ease;

  :hover {
    transform: scale(1.2);
    color: #ff10f0;
  }
`;

export const L = styled.a``;
