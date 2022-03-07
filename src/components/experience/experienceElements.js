import styled from "styled-components";

export const Experience1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  text-align: justify;
  text-justify: inter-word;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 500ms ease;

  @media screen and (max-width: 768px) {
    padding: 1rem;

    text-align: inherit;
    text-justify: inherit;
  }
`;

export const ExperienceWrapper = styled.div`
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ExperienceHeader = styled.h1`
  color: #d3d3d3;

  margin-left: 2rem;
  width: 100%;

  ::after {
    background-color: #1a293f;
    content: "";
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: middle;
    width: 45%;
    margin-left: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    margin-bottom: 1rem;

    ::after {
      content: none;
    }
  }
`;

export const Button = styled.button`
  padding: 0.75rem 2.25rem;
  background: transparent;
  border: 0px;
  color: #8892b0;
  font-size: 105%;
  transition: 0.3s ease;
  border-left: 3px solid #1a293f;
  text-align: left;
  border-left: ${({ active }) =>
    active ? " 2px solid #ff10f0" : " 2px solid #1a293f"};

  /* border-left: 2px solid #ff10f0; */

  :hover {
    background: #1a293f;
    color: #ff10f0;
  }

  /* :active {
    border-left: 2px solid #ff10f0;
  } */

  @media screen and (max-width: 768px) {
    border-bottom: 2px solid #1a293f;
    border-left: none;
    text-align: center;
    border-bottom: ${({ active }) =>
      active ? " 2px solid #ff10f0" : " 2px solid #1a293f"};
  }
`;

export const ExperienceBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 0 3rem 0;
    align-items: inherit;
  }
`;
export const ExperienceMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    overflow-x: scroll;
    margin-bottom: 1rem;
  }
`;

export const ExperienceHeading = styled.h3`
  color: #d3d3d3;
`;

export const ExperienceInfo = styled.div`
  padding: 0.25rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  flex: 3;
`;

export const ExperienceDate = styled.p`
  margin-bottom: 0.5rem;
  color: #8892b0;
`;
export const ExperienceParagraph = styled.p`
  line-height: 150%;
  color: #8892b0;
`;
