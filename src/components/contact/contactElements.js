import styled from "styled-components";

export const ContactWrapper = styled.div`
  height: 84vh;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
    padding: 5rem 1rem;
  }
`;

export const ContactHeader = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ccd6f6;
`;
export const ContactParagraph = styled.p`
  color: #97a2c1;
  font: 1.5rem;
  width: 50%;
  text-align: center;
  letter-spacing: 0.08rem;
  line-height: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ContactButton = styled.a`
  margin: 2.5rem;
  background: transparent;
  color: #ff10f0;
  border: 1px solid #ff10f0;
  border-radius: 5px;
  padding: 1rem 3rem;
  cursor: pointer;
  transition: 0.3s ease;
  font-size: 120%;
  text-decoration: none;

  :hover {
    border: 1px solid #ff10f0;
    background: #ff10f0;
    color: #23395d;
    opacity: 0.8;
  }
`;

export const Mail = styled.span`
  color: #ff10f0;
`;
