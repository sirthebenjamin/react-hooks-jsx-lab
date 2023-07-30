import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        Add any content of your choosing here. For example, you can write about
        your skills, experience, or interests.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;