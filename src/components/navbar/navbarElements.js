import styled, { keyframes } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

import { FaBars, FaTimes, FaIceCream } from "react-icons/fa";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  background: #0a192f;
  opacity: 0.95;
  position: fixed;
  width: 100%;
  top: ${({ visible }) => (visible ? "0px" : "-120px")};
  transition: top 500ms ease;

  z-index: 999;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;
  margin-right: 2.5rem;
  font-size: 120%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LogoWrapper = styled.div``;
export const Logo = styled(Link)`
  margin-left: 3rem;
  color: white;

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;

export const NavLinkWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkS)`
  margin: 2rem;
  color: #8892b0;
  text-decoration: none;
  transition: 0.3s ease;
  cursor: pointer;
  :hover {
    color: #ff10f0;
  }
`;
export const Resume = styled.button`
  margin: 2.5rem;
  background: transparent;
  color: #ff10f0;
  border: 1.5px solid #ff10f0;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: 0.3s ease;
  font-weight: bold;
  text-decoration: none;

  :hover {
    border: 1.5px solid #ff10f0;
    background: #ff10f0;
    color: #23395d;
    opacity: 0.8;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3rem 0;
  z-index: 999;
  background-color: #0a192f;

  top: ${({ toggle }) => (toggle ? "0" : "-120%")};
  transition: 0.4s ease-in;
`;

export const CloseMenu = styled(FaTimes)`
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.5rem 2.5rem;
`;
export const IceCream = styled(FaIceCream)`
  color: #ff10f0;
  font-size: 2rem;
  transition: 0.3s ease;

  :hover {
    transform: scale(1.2);
    color: white;
  }
`;
