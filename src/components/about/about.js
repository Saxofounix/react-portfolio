import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/debounce";
import {
  AboutHeading,
  AboutParagraph,
  AboutPhoto,
  AboutText,
  AboutWrapper,
  Photo,
} from "./aboutElements";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkHeight = debounce(() => {
    const height =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (height > 250) {
      setIsVisible(true);
      console.log(height);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", checkHeight);
  }, []);

  return (
    <AboutWrapper isVisible={isVisible} id="about">
      <AboutText>
        <AboutHeading>About me</AboutHeading>
        <AboutParagraph>
          Hello! My name is Adam and I enjoy creating things that live on the
          internet. My interest in web development started back in 2020 when I
          decided to build my first (not so responsive) HTML & CSS website.
          <br />
          <br />
          Fast-forward to today, and I am still learning about web development.
          I have build several frontend websites utilizing HTML5, CSS3,
          JavaScript and React. I also experimented with backend technologies,
          building mini APIs or user authentication systems with Node, Express
          and Mongoose.
          <br />
          <br />
          Apart from being a tech enthusiast, I hold a business degree, enjoy
          sports, cooking and literature.
        </AboutParagraph>
      </AboutText>
      <AboutPhoto>
        <Photo src="https://scontent.fopo4-1.fna.fbcdn.net/v/t31.18172-8/14138117_1208314972522925_1665895216628234564_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=Ep342kMdYWIAX8aT9_p&_nc_ht=scontent.fopo4-1.fna&oh=00_AT-6B0eBgYwJzqwtLkse3kmkmQGRa7B3oepwjaMjPOWy9g&oe=6244BEC8"></Photo>
      </AboutPhoto>
    </AboutWrapper>
  );
};

export default About;
