export default function Project({ title, description, link, imageSrc, codeLink }) {
  return (
    <div className="project-box">
      <img className="project-image" src={imageSrc} alt={`${title} Logo`} />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a className="project-link pink" href={link} target="_blank" rel="noreferrer">
          View Project
        </a>
        <a className="project-link blue" href={codeLink} target="_blank" rel="noreferrer">
          View Code
        </a>
      </div>
    </div>
  );
}