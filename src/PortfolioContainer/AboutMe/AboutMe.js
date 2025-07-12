import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";
import { useTranslation } from "react-i18next";

export default function AboutMe(props) {
  const { t } = useTranslation();

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const bullets = [
    t("aboutMe.bullet1"),
    t("aboutMe.bullet2"),
    t("aboutMe.bullet3"),
    t("aboutMe.bullet4"),
    t("aboutMe.bullet5"),
    t("aboutMe.bullet6"),
    t("aboutMe.bullet7"),
    t("aboutMe.bullet8"),
    t("aboutMe.bullet9"),
    t("aboutMe.bullet10"),
    t("aboutMe.bullet11")
  ];

  const renderHighlight = () => {
    return bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={t("aboutMe.title")} subHeading={t("aboutMe.subHeading")} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {t("aboutMe.description")}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{t("aboutMe.heading")}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {t("contactMe")}  
              </button>
              <a href="CV.pdf" download="CV.pdf">
                <button className="btn highlighted-btn">{t("downloadCV")}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
