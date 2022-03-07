import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding: 0 8rem;
  background: #0a192f;
  display: flex;
  z-index: 3;

  text-align: justify;
  text-justify: inter-word;

  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 500ms ease;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;

    text-align: inherit;
    text-justify: inherit;
  }
`;

export const AboutText = styled.div`
  flex: 1;
  padding-right: 1.25rem;
`;
export const AboutHeading = styled.h1`
  color: #d3d3d3;
  margin-bottom: 0.5rem;
  font-weight: 900;
`;
export const AboutParagraph = styled.p`
  color: #8892b0;
  line-height: 1.5;
`;

export const AboutPhoto = styled.div`
  flex: 0.75;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;
export const Photo = styled.img`
  margin-top: 3rem;
  max-width: 70%;
  min-width: 220px;
  height: auto;
  z-index: 3;

  box-shadow: 10px -10px 0 -5px #ff10f0, 10px -10px 0 0 #ff10f0;
  transition: box-shadow ease-in 150ms;

  :hover {
    box-shadow: 5px -5px 0 -5px transparent, 5px -5px 0 0 transparent;
  }

  @media screen and (max-width: 768px) {
    max-width: 50%;
  }
`;
