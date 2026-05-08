export default function CVEducation({ education }) {
  return (
    <section className="section">
      <div className="section-title">Education</div>
      <div className="edu-grid">
        {education.map((edu, i) => (
          <div className="edu-item" key={i}>
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-inst">{edu.institution}</div>
            <div className="edu-period">{edu.period}</div>
            <div className="edu-detail">{edu.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
