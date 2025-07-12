import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import EducationIcon from "../../assets/Resume/education.svg";
import WorkHistoryIcon from "../../assets/Resume/work-history.svg";
import ProgrammingSkillsIcon from "../../assets/Resume/programming-skills.svg";
import ProjectsIcon from "../../assets/Resume/projects.svg";
import InterestsIcon from "../../assets/Resume/interests.svg";

const Resume = (props) => {
  const { t } = useTranslation();

  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
        <span>{props.heading || ""}</span>
        {props.fromDate && props.toDate ? (
          <div className="heading-date">{props.fromDate + " - " + props.toDate}</div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="resume-sub-heading">
        <span>{props.subHeading || ""}</span>
      </div>
      <div className="resume-heading-description">
        <span>{props.description || ""}</span>
      </div>
    </div>
  );

  const resumeBullets = [
    { label: t("resume.education"), logoSrc: EducationIcon },
    { label: t("resume.workHistory"), logoSrc: WorkHistoryIcon },
    { label: t("resume.programmingSkills"), logoSrc: ProgrammingSkillsIcon },
    { label: t("resume.projects"), logoSrc: ProjectsIcon },
    { label: t("resume.interests"), logoSrc: InterestsIcon },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Sql Server", ratingPercentage: 85 },
    { skill: "C#", ratingPercentage: 85 },
    { skill: "ASP.Net", ratingPercentage: 80 },
    { skill: "Java", ratingPercentage: 70 },
    { skill: "C", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
  ];

  const projectsDetails = [
    {
      title: t("resume.project1"),
      duration: { fromDate: "2024", toDate: "2024" },
      description: t("resume.project1Desc"),
      subHeading: t("resume.project1Techs"),
    },
    {
      title: t("resume.project2"),
      duration: { fromDate: "2024", toDate: "2024" },
      description: t("resume.project2Desc"),
      subHeading: t("resume.project2Techs"),
    },
    {
      title: t("resume.project3"),
      duration: { fromDate: "2025", toDate: "2025" },
      description: t("resume.project3Desc"),
      subHeading: t("resume.project3Techs"),
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={t("resume.school1")}
        subHeading={t("resume.school1Desc")}
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={t("resume.school2")}
        subHeading={t("resume.school2Desc")}
        fromDate={"2022"}
        toDate={t("resume.school2Date")}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={t("resume.workplace")}
          subHeading={t("resume.role")}
          fromDate={"2024"}
          toDate={t("resume.ongoing")}
        />
        <div className="experience-description">
          <span className="resume-description-text">{t("resume.workDesc1")}</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">{t("resume.workDesc2")}</span>
          <br />
          <span className="resume-description-text">- {t("resume.techsUsed")}</span>
          <br />
          <br />
        </div>
      </div>
    </div>,

    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar"></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      <div className="project-scroll-area">
        {projectsDetails.map((project, index) => (
          <ResumeHeading
            key={index}
            heading={project.title}
            subHeading={project.subHeading}
            description={project.description}
            fromDate={project.duration.fromDate}
            toDate={project.duration.toDate}
          />
        ))}
      </div>
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading={t("resume.interest1")} description={t("resume.interest1Desc")} />
      <ResumeHeading heading={t("resume.interest2")} description={t("resume.interest2Desc")} />
      <ResumeHeading heading={t("resume.interest3")} description={t("resume.interest3Desc")} />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = { style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" } };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
      >
        <img className="bullet-logo" src={bullet.logoSrc} alt={bullet.label} />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => (
    <div style={carousalOffsetStyle.style} className="resume-details-carousal">
      {resumeDetails.map((ResumeDetail) => ResumeDetail)}
    </div>
  );

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={t("resume.title")} subHeading={t("resume.subHeading")} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
