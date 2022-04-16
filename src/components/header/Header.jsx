import React from "react";
import "../css/header.css";
import HeaderButtons from "./HeaderButtons";
import me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Piotr Tratwal</h1>
        <h5>front-end developer</h5>
        <HeaderButtons />

        <div className="me">
          <HeaderSocials />
          <div className="header__img">
            <img src={me} alt="me" />
          </div>

          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
