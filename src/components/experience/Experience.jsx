import React, { useState } from "react";
import "../css/experience.css";
// import { BsPatchCheckFill } from "react-icons/bs";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiGithub,
  SiReactrouter,
  SiRedux,
  SiBootstrap,
  SiNodedotjs,
} from "react-icons/si";
import { InView } from "react-intersection-observer";
const Experience = () => {
  let [divClass, setClass] = useState("experience__main-title");
  return (
    <section id="experience">
      <InView
        className={`${divClass} experience__main-title`}
        as="div"
        threshold={0.6}
        onChange={(inView) =>
          inView
            ? setClass((divClass = "experience__main-title-anim"))
            : setClass((divClass = ""))
        }
      >
        <h5>What Skills I Have?</h5>
        <h2>I have learned and used such Technologies as:</h2>
      </InView>

      <div className="container experience__container">
        <div className="experience__content">
          <article className="experience__details html">
            <SiHtml5 />
            <div>
              <h4>HTML</h4>
              <small className="text-light intermediate">Intermediate</small>
            </div>
          </article>
          <article className="experience__details css">
            <SiCss3 />
            <div>
              <h4>CSS/SASS</h4>
              <small className="text-light intermediate">Intermediate</small>
            </div>
          </article>
          <article className="experience__details javascript">
            <SiJavascript />
            <div>
              <h4>JavaScript</h4>

              <small className="text-light intermediate">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <SiReact />
            <div>
              <h4>React.js</h4>
              <small className="text-light react intermediate">
                Intermediate
              </small>
            </div>
          </article>
          <article className="experience__details git">
            <SiGithub />
            <div>
              <h4>GIT</h4>
              <small className="text-light elementary">Elementary</small>
            </div>
          </article>
          <article className="experience__details router">
            <SiReactrouter />
            <div>
              <h4>React Router</h4>
              <small className="text-light low-intermediate">
                Low Intermediate
              </small>
            </div>
          </article>
          <article className="experience__details redux">
            <SiRedux />
            <div>
              <h4>Redux</h4>
              <small className="text-light elementary">Elementary</small>
            </div>
          </article>
          <article className="experience__details bootstrap">
            <SiBootstrap />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light elementary">Elementary</small>
            </div>
          </article>
          <article className="experience__details node">
            <SiNodedotjs />
            <div>
              <h4>Node.js</h4>
              <small className="text-light elementary">Elementary</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
