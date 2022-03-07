import React from "react";
import { PanelWrapper, NavLink, LI, GH, MAIL, L } from "./sidepanelElements";

const Sidepanel = () => {
  return (
    <>
      <PanelWrapper>
        <NavLink
          href="https://www.linkedin.com/in/adam-t%C3%B3th-201136182/"
          target="_blank"
        >
          <LI></LI>
        </NavLink>
        <NavLink href="https://github.com/Saxofounix" target="_blank">
          <GH></GH>
        </NavLink>
        <NavLink to="">
          <L href="mailto:adamthoti@gmail.com">
            <MAIL></MAIL>
          </L>
        </NavLink>
      </PanelWrapper>
    </>
  );
};

export default Sidepanel;
