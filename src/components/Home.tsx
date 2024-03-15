import { logoList } from "@data/logo.data";
import { me } from "@data/me.data";
import { portofolioList } from "@data/portfolio.data";
import { skillList } from "@data/skill.data";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SquareLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";
import MonCV from "src/assets/CV_Gael-MASSART.pdf";
import ProfilePic from "src/assets/gael-massart.png";
import "src/styles/home.css";
import { stringCapitalize } from "src/utils/functions";

const groupedSkills = skillList.reduce((acc, skill) => {
  const category = skill.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(skill);
  acc[category].sort((a, b) => b.estimatedLevel - a.estimatedLevel);
  return acc;
}, {} as { [key: string]: typeof skillList });

type LogoSources = {
  github: string;
  linkedin: string;
  email: string;
  theme: string;
};
const Home = ({
  fakeLoading,
  loading,
  fadeEffect,
}: {
  fakeLoading: () => Promise<void>;
  loading: boolean;
  fadeEffect: string;
}) => {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [isDarkTheme, setIsDarkTheme] = useState(
    () => localStorage.getItem("isDark") === "true"
  );

  useEffect(() => {
    fakeLoading();
  }, []);

  useEffect(() => {
    fakeLoading();
    const applyTheme = () => {
      const themeClass = isDarkTheme ? "dark-theme" : "";
      document.body.className = themeClass;
    };

    applyTheme();
    localStorage.setItem("isDark", isDarkTheme.toString());
  }, [isDarkTheme]);

  const getLogoSrc = useMemo(() => {
    return (logoName: keyof LogoSources) => {
      const logo = logoList.find((l) => l.name === logoName)!;
      return isDarkTheme ? logo.dark : logo.light;
    };
  }, [isDarkTheme]);
  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  return loading ? (
    <div className={`loader-container ${fadeEffect}`}>
      <SquareLoader
        size={150}
        color={"var(--btn-bg-color)"}
        loading={loading}
      />
    </div>
  ) : (
    <div
      className={`home-container ${fadeEffect} fade-in ${
        isDarkTheme ? "dark-theme" : ""
      }`}
    >
      <section className="hero">
        <img
          className="theme-btn"
          src={getLogoSrc("theme")}
          alt="theme icon"
          onClick={toggleTheme}
        />
        <div
          className="hero-pic"
          data-tooltip-id="profile_pic"
          data-tooltip-content="Salut ! 👋"
        >
          <div className="inner-circle"></div>
          <img src={ProfilePic} alt={me.name} />
        </div>
        <Tooltip id="profile_pic" place="top" />
        <div className="hero-info">
          <h1>{me.name}</h1>
          <h2>{me.title}</h2>
          <div className="logo-container">
            <a href={me.github}>
              <img src={getLogoSrc("github")} alt="GitHub logo" />
            </a>
            <a href={me.linkedin}>
              <img src={getLogoSrc("linkedin")} alt="LinkedIn logo" />
            </a>
            <a href={`mailto:${me.email}`}>
              <img src={getLogoSrc("email")} alt="Email logo" />
            </a>
          </div>
        </div>
      </section>
      <section className="experience">
        {me.experiences?.map((exp) => (
          <>
            <h2
              key={`exp_${exp.id}`}
              data-tooltip-id={`exp_${exp.id}`}
              data-tooltip-content={exp.description}
            >
              <b>{exp.number}</b> {" " + stringCapitalize(exp.unit)}
              <br />
              <a href={exp.url} target="_blank">
                <span title={exp.location}>📍</span>
                {stringCapitalize(exp.company)}
              </a>
              {exp.trophies && <br />}
              {exp.trophies?.map((t) => (
                <>
                  <span
                    className="trophies"
                    key={t.id}
                    data-tooltip-id={`trophy_${t.id}`}
                    data-tooltip-content={`${t.title} ${t.year}`}
                  >
                    {t.emoji}
                  </span>
                  <Tooltip id={`trophy_${t.id}`} place="right" />
                </>
              ))}
            </h2>
            <Tooltip id={`exp_${exp.id}`} place="top" />
          </>
        ))}
      </section>
      <section className="cta">
        <a href={MonCV} target="_blank" rel="noopener noreferrer">
          <button className="btn download-btn">Mon CV</button>
        </a>
        <a href="https://linktr.ee/mgael" target="_blank">
          <button className="btn contact-btn">Contact</button>
        </a>
      </section>
      <section className="portfolio-skills">
        <div className="btn-bg">
          <button
            className={`btn-2 ${activeTab === "portfolio" ? "active-btn" : ""}`}
            onClick={() => setActiveTab("portfolio")}
          >
            Portfolio
          </button>
          <button
            className={`btn-2 ${activeTab === "skills" ? "active-btn" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Compétences
          </button>
        </div>
      </section>
      {/* Portfolio Section */}
      {activeTab === "portfolio" && (
        <section className="portfolio" id="portfolio">
          {portofolioList.map((project) => (
            <div key={project.id} className="wrapper project-wrapper">
              <Link to={project.link ?? ""}>
                <div className="project-info">
                  <img src={project.image} alt={project.name} />
                  {project.frontImage && (
                    <img
                      className="front-image"
                      src={project.frontImage}
                      alt={project.name}
                    />
                  )}
                </div>
              </Link>
            </div>
          ))}
        </section>
      )}
      {/* Skills Section */}
      {activeTab === "skills" && (
        <section className="skills" id="skills">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div key={category} className="wrapper">
              <h3>{stringCapitalize(category)}</h3>
              <article className="skill-container">
                {skills.map((skill) => (
                  <>
                    <p
                      className="skill-item"
                      key={skill.id}
                      data-tooltip-id={`skill_${skill.id}`}
                      data-tooltip-content={`Première utilisation en ${skill.firstUse}`}
                    >
                      {skill.emoji} {skill.name} {skill.favorite && "❤️"}
                      <span className="skill-stars">
                        {"⭐".repeat(skill.estimatedLevel)}
                      </span>
                    </p>
                    <Tooltip id={`skill_${skill.id}`} place="top" />
                  </>
                ))}
              </article>
            </div>
          ))}
        </section>
      )}
      <footer>
        <p>Portfolio Gaël Massart 2024</p>
      </footer>
    </div>
  );
};

export default Home;
