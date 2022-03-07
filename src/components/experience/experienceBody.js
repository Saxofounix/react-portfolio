import React, { useEffect, useState } from "react";
import {
  ExperienceBody,
  ExperienceMenu,
  ExperienceInfo,
  Button,
  ExperienceDate,
  ExperienceHeading,
  ExperienceParagraph,
} from "./experienceElements";

const ExperienceInformation = ({ jobs, info, setInfo }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setInfo({
      name: jobs[0].name,
      secondary: jobs[0].secondary,
      desc: jobs[0].desc,
    });
  }, []);

  const handleClick = (e) => {
    const id = e.target.id;

    jobs.map((job) => {
      if (id == job.id) {
        setActive(job.id - 1);
        setInfo({
          id: job.id,
          name: job.name,
          secondary: job.secondary,
          desc: job.desc,
        });
      }
    });
    console.log(info);
  };

  return (
    <ExperienceBody>
      <ExperienceMenu>
        {jobs.map((job, i) => {
          return (
            <>
              <Button
                onClick={handleClick}
                id={job.id}
                active={active === i ? 1 : 0}
              >
                {job.name}
              </Button>
            </>
          );
        })}
      </ExperienceMenu>
      <ExperienceInfo>
        <ExperienceHeading>{info.name}</ExperienceHeading>
        <ExperienceDate>{info.secondary}</ExperienceDate>
        <ExperienceParagraph>{info.desc}</ExperienceParagraph>
      </ExperienceInfo>
    </ExperienceBody>
  );
};

export default ExperienceInformation;
