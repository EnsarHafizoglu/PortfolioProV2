import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./GithubRepos.css";
import { useTranslation } from "react-i18next";

export default function GithubRepos(props) {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => fadeInSubscription.unsubscribe();
  }, [props.id]);

  useEffect(() => {
    fetch("https://api.github.com/users/EnsarHafizoglu/repos")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sorted);
      });
  }, []);

  const visibleRepos = showAll ? repos : repos.slice(0, 6);

  return (
    <div>
      <ScreenHeading
        title={t("github.title")}
        subHeading={t("github.subHeading")}
      />
      <section className="github-section fade-in" id={props.id || ""}>
        <div className="repo-count-wrapper">
          <p className="repo-count">
            {t("github.totalRepos", { count: repos.length })}
          </p>
        </div>

        <div className="container github-grid">
          {visibleRepos.map((repo) => (
            <div key={repo.id} className="repo-item">
              <h5>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </h5>
              <p>{repo.description || t("github.noDescription")}</p>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          ))}
        </div>

        {repos.length > 6 && (
          <div className="github-toggle">
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? t("github.showLess") : t("github.showMore")}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
