export default function CVHeader({ name, title, contact }) {
  return (
    <header className="cv-header">
      <div className="cv-header-top">
        <div>
          <div className="cv-name">{name}</div>
          <div className="cv-jobtitle">{title}</div>
        </div>
      </div>
      <div className="cv-contact-row">
        {contact.map((c, i) => (
          <a
            className="cv-contact-item"
            key={i}
            href={c.href}
            target={
              c.href.startsWith("mailto") || c.href.startsWith("tel")
                ? "_self"
                : "_blank"
            }
            rel="noopener noreferrer"
          >
            {c.label}
          </a>
        ))}
      </div>
    </header>
  );
}
