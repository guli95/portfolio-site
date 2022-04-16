import React, { useState } from "react";
import "../css/about.css";
import me from "../../assets/me-about.jpg";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const About = () => {
  let [imgClass, setAnim] = useState("about__me-image");
  let [divClass, setClass] = useState("about__main-title");

  return (
    <section id="about">
      <InView
        className={`${divClass} about__main-title`}
        as="div"
        threshold={0.8}
        onChange={(inView) =>
          inView
            ? setClass((divClass = "about__main-title-anim"))
            : setClass((divClass = ""))
        }
      >
        <h5>Get To Know</h5>
        <h2>Me</h2>
      </InView>

      <div className="container about__container">
        <div className="about__me-image">
          <InView
            className={imgClass}
            as="img"
            threshold={0.5}
            onChange={(inView) =>
              inView
                ? setAnim((imgClass = "about__me-image-anim"))
                : setAnim((imgClass = "about__me-image"))
            }
            src={me}
          ></InView>
        </div>
        <div className="about__content">
          <p>
            I'm passionate Front end Developer with experience in web designing.
            Currently I live in and work in Poznań. I am really focused on
            learning and improving my skills, I have no fear to new challenges.
            I would like to develop myself as a programmer, even without much
            experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
