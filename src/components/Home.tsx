import { portofolioList } from "@data/portfolio.list";
import { skillList } from "@data/skill.list";
import { useEffect, useMemo, useState } from "react";
import ProfilePic from "src/assets/gael-massart.png";
import { logoList } from "src/data/logo.list";
import { me } from "src/data/me.info";
import "src/styles/home.css";
import { stringCapitalize } from "src/utils/functions";

const groupedSkills = skillList.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as { [key: string]: typeof skillList });

type LogoSources = {
  github: string;
  linkedin: string;
  email: string;
  theme: string;
};
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [isDarkTheme, setIsDarkTheme] = useState(
    () => localStorage.getItem("isDark") === "true"
  );

  useEffect(() => {
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

  return (
    <div className={isDarkTheme ? "dark-theme" : ""}>
      <section className="hero">
        <img
          className="theme-btn"
          src={getLogoSrc("theme")}
          alt="theme icon"
          onClick={toggleTheme}
        />
        <div className="hero-pic">
          <div className="inner-circle"></div>
          <img src={ProfilePic} alt="Mason Wilkes" />
        </div>
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
          <h2 key={exp.id}>
            <b>{exp.number}</b> {" " + stringCapitalize(exp.unit)}
            {exp.trophies?.map((t) => (
              <span key={t.id} title={`${t.title} ${t.year}`}>
                {t.emoji}
              </span>
            ))}
            <br />
            <span title={exp.location}>📍</span> {stringCapitalize(exp.company)}
          </h2>
        ))}
      </section>
      <section className="cta">
        <a href="assets/example-cv.pdf" download>
          <button className="btn download-btn">Download CV</button>
        </a>
        <a href="mailto:abc@gmail.com">
          <button className="btn contact-btn">Contact Me</button>
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
            Skills
          </button>
        </div>
      </section>
      {/* Portfolio Section */}
      {activeTab === "portfolio" && (
        <section className="portfolio" id="portfolio">
          {portofolioList.map((project) => (
            <div key={project.id} className="wrapper project-wrapper">
              <a href={project.link}>
                <img src={project.image} alt={project.name} />
              </a>
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
                  <p key={skill.id}>
                    {skill.emoji} {skill.name}
                  </p>
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

export default Portfolio;
