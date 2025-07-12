import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Profile.css';
import ScrollService from '../../../utilities/ScrollService';
import i18n from '../../../i18n';
import { useTranslation } from 'react-i18next';


export default function Profile() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="profile-container">
      <div className="profile-parent">

        {/* 🌐 Dil değiştirme butonları */}
<div className="language-switch-mobile">
  <button
    className={i18n.language === "en" ? "active" : ""}
    onClick={() => changeLanguage("en")}
  >
    English
  </button>
  <button
    className={i18n.language === "tr" ? "active" : ""}
    onClick={() => changeLanguage("tr")}
  >
    Türkçe
  </button>
</div>



        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="mailto:ensarportfoliopro@gmail.com">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/ensar_hfzoglu/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://github.com/EnsarHafizoglu">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/ensar-hafızoğlu-125415250">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {t('greeting')} <span className="highlighted-text">ENSAR</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typewriter
                  words={[t('role1'), t('role2')]}
                  loop={Infinity}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              {t('about')}
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {t('contactMe')}
            </button>
            <a href="CV.pdf" download="Ensar Hafızoğlu CV.pdf">
              <button className="btn highlighted-btn">{t('downloadCV')}</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
