export default function CVProjects({ projects }) {
  return (
    <section className="section">
      <div className="section-title">Projects</div>
      <div className="proj-grid">
        {projects.map((proj, i) => (
          <div className="proj-item" key={i}>
            <div className="proj-name">{proj.name}</div>
            <div className="proj-tech">{proj.tech}</div>
            <div className="proj-desc">{proj.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
