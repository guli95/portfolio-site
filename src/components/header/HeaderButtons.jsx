import React from "react";
import CV from "../../assets/Piotr_Tratwal_-_Front_end_Developer.pdf";

const HeaderButtons = () => {
  return (
    <div className="header__buttons">
      <a href={CV} download className="btn">
        Download my CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default HeaderButtons;
