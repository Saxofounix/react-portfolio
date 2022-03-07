import React from "react";
import {
  ContactWrapper,
  ContactButton,
  ContactHeader,
  ContactParagraph,
  Mail,
} from "./contactElements";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactHeader>Get in touch</ContactHeader>
      <ContactParagraph>
        I’m currently looking for new opportunities in Berlin. My inbox is
        always open. Please do not hesitate to reach out via LinkedIn or at{" "}
        <Mail>adamthoti@gmail.com</Mail>
      </ContactParagraph>
      <ContactButton
        href="https://www.linkedin.com/in/adamtoti/"
        target="_blank"
      >
        LinkedIn
      </ContactButton>
    </ContactWrapper>
  );
};

export default Contact;
