export default function CVSkillsLanguages({ skills, languages }) {
  return (
    <div className="bottom-row">
      {/* Skills */}
      <div>
        <div className="bottom-section-title">Skills</div>
        {Object.entries(skills).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <div className="skill-group-name">{group}</div>
            <div className="skill-tags">
              {items.map((s, i) => (
                <span className="skill-tag" key={i}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div>
        <div className="bottom-section-title">Languages</div>
        <ul className="plain-list">
          {languages.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
