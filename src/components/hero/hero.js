import React from "react";
import {
  HeroWrapper,
  HeroText,
  NameHero,
  StatementHero,
  ParagraphHero,
  ButtonHero,
} from "./heroElements";

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroText>
          <NameHero>Hi, I am Adam</NameHero>
          <StatementHero>Self taught web developer</StatementHero>
          <ParagraphHero>
            I enjoy crafting solid and scalable frontend products with great
            user experience
          </ParagraphHero>
        </HeroText>
      </HeroWrapper>
    </>
  );
};

export default Hero;
