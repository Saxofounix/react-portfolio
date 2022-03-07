import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100wv;
  height: 100vh;
  background: #0a192f;
  display: flex;
  align-items: center;
`;

export const HeroText = styled.div`
  padding-left: 8rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
export const NameHero = styled.h1`
  font-size: 5vw;
  color: #d3d3d3;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const StatementHero = styled.h1`
  font-size: 5vw;
  color: #8892b0;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;
export const ParagraphHero = styled.p`
  margin-top: 0.5rem;
  font-size: 1.5vw;
  width: 60%;
  color: #8892b0;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: 1rem;
  }
`;
