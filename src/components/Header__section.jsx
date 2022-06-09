import React from "react";

export default function Header__section() {
  return (
    <div className="header__section__wrapper">
      <div className="header__section__wrapper__container">
        <div className="header__section__wrapper__container__headings">
          <div className="header__section__wrapper__container__headings__one">
            Hi, i am
          </div>
          <div className="header__section__wrapper__container__headings__two">
            Bilal-Shabbir
          </div>
          <div className="header__section__wrapper__container__headings__three">
            Let's Build You A Digital Identity
          </div>
          <div className="header__section__wrapper__container__headings__four">
            I'm a Web Developer based in Pakistan. Proficent in web and mobile
            deveopment. I enjoy turning complex problems into simple, beautiful
            and intuitive solutions. Working at this time for{" "}
            <span className="header__section__wrapper__container__headings__four__span">
              {" "}
              Crazybeings Studio
            </span>
            <div className="header__section__wrapper__container__headings__button">
              <button>Check Out my Work</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
