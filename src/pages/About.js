import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaFigma,
  FaJs,
  FaNpm,
  FaReact,
  FaPhp,
  FaGithub,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiPhotoshop } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <section className="about">
      <div className="text-zone">
        <h2>Me, Myself & I</h2>
        <p>
          I’m a Full-Stack Developer located in Ballia(UP). I have a serious
          passion for website development, dynamic user experiences.
        </p>
        <p>
          Well-organised person, problem solver, independent employee with high
          attention to detail. Outdoor activities, TV series and English
          literature. A family person,
        </p>
        <p>
          Interested in the entire web development and working on ambitious
          projects with positive people.
        </p>
      </div>
      <div className="skills-charts">
        <ul>
          <li title="HTML">{<FaHtml5 />}</li>
          <li title="CSS">{<FaCss3 />}</li>
          <li title="SASS">{<FaSass />}</li>
          <li title="Bootstrap">{<FaBootstrap />}</li>
          <li title="Figma">{<FaFigma />}</li>
          <li title="Adobe Photoshop">{<DiPhotoshop />}</li>
        </ul>
        <ul>
          <li title="JavaScript">{<FaJs />}</li>
          <li title="ES5/ES6">{<Icon icon="logos:es6" />}</li>
          <li title="JSON">{<VscJson />}</li>
          <li title="npm">{<FaNpm />}</li>
          <li title="ReactJS">{<FaReact />}</li>
        </ul>
        <ul>
          <li title="PHP">{<FaPhp />}</li>
          <li title="MySQL">{<GrMysql />}</li>
          <li title="GitHub">{<FaGithub />}</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
