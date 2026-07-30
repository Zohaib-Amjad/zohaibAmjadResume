import CV_DATA from "../../data/cvData";
import CVHeader from "./CVHeader";
import CVExperience from "./CVExperience";
import CVEducation from "./CVEducation";
import CVProjects from "./CVProjects";
import CVSkillsLanguages from "./CVSkillsLanguages";

export default function CV({ theme, onToggleTheme }) {
  const d = CV_DATA;

  return (
    <>
      <div className="cv-page">
        <CVHeader name={d.name} title={d.title} contact={d.contact} />

        <div className="cv-body">
          {/* Profile / Summary */}
          <section className="section">
            <div className="section-title">Profile</div>
            <p className="summary-text">{d.summary}</p>
          </section>

          <CVExperience experience={d.experience} />
          <CVEducation education={d.education} />
          <CVProjects projects={d.projects} />
          <CVSkillsLanguages skills={d.skills} languages={d.languages} />
        </div>
      </div>

      <div className="cv-actions">
        <button
          className="action-btn theme-btn"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? "☾ Dark theme" : "☀ Light theme"}
        </button>
        <button
          className="action-btn print-btn"
          type="button"
          onClick={() => window.print()}
        >
          ⬇ Download / Print
        </button>
      </div>
    </>
  );
}
