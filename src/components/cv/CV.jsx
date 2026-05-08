import CV_DATA from "../../data/cvData";
import CVHeader from "./CVHeader";
import CVExperience from "./CVExperience";
import CVEducation from "./CVEducation";
import CVProjects from "./CVProjects";
import CVSkillsLanguages from "./CVSkillsLanguages";

export default function CV() {
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

      <button className="print-btn" onClick={() => window.print()}>
        ⬇ Download / Print
      </button>
    </>
  );
}
