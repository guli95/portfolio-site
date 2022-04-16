import React, { useState } from "react";
import "../css/portfolio.css";
import data from "./portfolio-data";
import { InView } from "react-intersection-observer";

const Portfolio = () => {
  let [divClass, setClass] = useState("portfolio__main-title");
  return (
    <section id="portfolio">
      <InView
        className={`${divClass} portfolio__main-title`}
        as="div"
        threshold={0.6}
        onChange={(inView) =>
          inView
            ? setClass((divClass = "portfolio__main-title-anim"))
            : setClass((divClass = ""))
        }
      >
        <h5>What's projects I've Done?</h5>
        <h2>Look At My Portfolio</h2>
      </InView>
      <div className="container portfolio__container">
        {data.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <figure className="portfolio__item-image-overlay">
                <img src={item.img} alt={`project ${item.id}`} />
                <div>
                  <h2>
                    {item.title}
                    <p>{item.describe1}</p>
                    <p>{item.describe2}</p>
                  </h2>
                  <div className="curl"></div>
                  <a href={item.demo}></a>
                </div>
              </figure>
            </div>
            <h3>{item.title}</h3>
            <a href={item.git} className="btn" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href={item.demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
