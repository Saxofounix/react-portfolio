import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/debounce";
import { animateScroll } from "react-scroll";
import { saveAs } from "file-saver";
import {
  LogoWrapper,
  Logo,
  Nav,
  NavLinkWrapper,
  NavLink,
  Resume,
  Bars,
  MobileMenu,
  CloseMenu,
  IceCream,
} from "./navbarElements";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 40) ||
        currentScrollPos < 20
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const toTop = () => {
    animateScroll.scrollToTop();
  };

  const handleToggle = () => {
    setToggle(false);
    setPrevScrollPos(0);
  };

  const saveFile = () => {
    saveAs("cv.pdf", "example.pdf");
  };

  return (
    <>
      <Nav visible={visible}>
        <LogoWrapper>
          <Logo to="">
            <IceCream onClick={toTop} />
          </Logo>
        </LogoWrapper>
        <NavLinkWrapper>
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
            exact="true"
            onClick={() => setPrevScrollPos(0)}
          >
            About
          </NavLink>
          <NavLink
            to="experience"
            spy={true}
            smooth={true}
            offset={-60}
            exact="true"
            onClick={() => setPrevScrollPos(0)}
          >
            Experience
          </NavLink>
          <NavLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            exact="true"
            onClick={() => setPrevScrollPos(0)}
          >
            Projects
          </NavLink>
          <NavLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            exact="true"
            onClick={() => setPrevScrollPos(0)}
          >
            Contact
          </NavLink>
          <Resume onClick={saveFile} download>
            Resume
          </Resume>
        </NavLinkWrapper>
        <Bars onClick={handleClick}></Bars>
      </Nav>

      <MobileMenu toggle={toggle}>
        <CloseMenu onClick={handleClick} />
        <NavLink to="about" spy={true} smooth={true} onClick={handleToggle}>
          About
        </NavLink>
        <NavLink
          to="experience"
          spy={true}
          smooth={true}
          onClick={handleToggle}
        >
          Experience
        </NavLink>
        <NavLink to="projects" spy={true} smooth={true} onClick={handleToggle}>
          Projects
        </NavLink>
        <NavLink to="contact" spy={true} smooth={true} onClick={handleToggle}>
          Contact
        </NavLink>
        <Resume href="./" download="ResumeOfficial.pdf">
          Resume
        </Resume>
      </MobileMenu>
    </>
  );
};

export default Navbar;
