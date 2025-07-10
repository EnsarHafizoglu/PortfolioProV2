import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './Profile.css';
import ScrollService from '../../../utilities/ScrollService';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
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
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Merhaba Ben <span className="highlighted-text">ENSAR</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
              <Typewriter
                  words={[ 'Full Stack Developer', 'Junior Developer 💻']}
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
           Merhaba! Ben Konya Teknik Üniversitesi'nde Yazılım Mühendisliği öğrencisiyim. 
           Aynı zamanda Architecht'te yarı zamanlı full stack geliştirici olarak çalışıyor,
            teorik bilgimi gerçek dünya projeleriyle pekiştiriyorum.
             Web geliştirme alanında kendimi sürekli geliştiriyor; 
             kullanıcı odaklı, hızlı ve ölçeklenebilir çözümler üretmeye odaklanıyorum.
              Modern teknolojilere ilgiyle yaklaşıyor,
               edindiğim bilgi ve becerileri projelerimde etkin bir şekilde kullanmaya özen gösteriyorum.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" 
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}         
            > Contact Me </button>
            <a href="CV.pdf" download="Ensar Hafızoğlu CV.pdf">
              <button className="btn highlighted-btn">Download CV</button>
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