import React, { useState, useEffect } from "react";
import { jobs } from "./data";
import { schools } from "./data";
import {
  ExperienceWrapper,
  ExperienceHeader,
  Experience1,
} from "./experienceElements";
import ExperienceInformation from "./experienceBody";

const Experience = () => {
  const [info, setInfo] = useState({
    id: jobs[0].id,
    name: jobs[0].name,
    date: jobs[0].degree,
  });
  const [education, setEducation] = useState({
    id: jobs[0].id,
    name: jobs[0].name,
    date: jobs[0].degree,
  });

  const [isVisible, setIsVisible] = useState(false);

  const checkHeight = () => {
    const height =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (height > 750) {
      setIsVisible(true);
      console.log(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkHeight);
  }, []);

  return (
    <Experience1 isVisible={isVisible} id="experience">
      <ExperienceWrapper>
        <ExperienceHeader>Where I've worked</ExperienceHeader>
        <ExperienceInformation jobs={jobs} info={info} setInfo={setInfo} />
        <ExperienceHeader>What I've studied</ExperienceHeader>
        <ExperienceInformation
          jobs={schools}
          info={education}
          setInfo={setEducation}
        />
      </ExperienceWrapper>
    </Experience1>
  );
};

export default Experience;
