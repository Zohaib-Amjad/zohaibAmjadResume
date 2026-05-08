export default function CVExperience({ experience }) {
  return (
    <section className="section">
      <div className="section-title">Experience</div>
      {experience.map((exp, i) => (
        <div className="exp-item" key={i}>
          <div className="exp-left">
            <div className="exp-period">{exp.period}</div>
            <div className="exp-company">{exp.company}</div>
            <div className="exp-location">{exp.location}</div>
          </div>
          <div className="exp-right">
            <div className="exp-role">{exp.role}</div>
            <ul className="exp-points">
              {exp.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
