import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const PanelWrapper = styled.div`
  height: 100%;
  position: fixed;
  right: 0;
  width: 50px;
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
  padding-bottom: 4rem;
  margin: 0.5rem;
  text-decoration: none;
  transform: rotate(-90deg);
  color: #ff10f0;
  letter-spacing: 3px;
  transition: 0.3s ease;

  :hover {
    font-size: 1.1rem;
    color: #8892b0;
  }
`;
