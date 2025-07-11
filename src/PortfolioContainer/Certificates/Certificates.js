import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificatesData from "../../utilities/certificatesData";
import "./Certificates.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow prev-arrow" onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="custom-arrow next-arrow" onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

export default function Certificates(props) {
  const { t } = useTranslation();

  let fadeInScreenHandler = (screen) => {
    if (!screen || !screen.fadeInScreen || !props.id) return;
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="certificates-container screen-container fade-in" id={props.id || ""}>
      <ScreenHeading title={t("certificates.title")} subHeading={t("certificates.subHeading")} />

      <p className="repo-count-wrapper">
        <span className="repo-count">
          {t("certificates.total", { count: certificatesData.length })}
        </span>
      </p>

      <Slider {...settings}>
        {certificatesData.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img src={cert.image} alt={t(`certificates.${cert.key}.title`)} className="certificate-image" />
            <h3>{t(`certificates.${cert.key}.title`)}</h3>
            <p><b>{t("certificates.issuedBy")}:</b> {t(`certificates.${cert.key}.organization`)}</p>
            <p><b>{t("certificates.date")}:</b> {cert.date}</p>
            <p>{t(`certificates.${cert.key}.description`)}</p>
            <div className="certificate-gains">
              <h2 className="title">
                <Typewriter
                  words={[t("certificates.gainsTitle")]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <ul>
                {t(`certificates.${cert.key}.gains`, { returnObjects: true }).map((gain, i) => (
                  <li key={i}>✅ {gain}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
