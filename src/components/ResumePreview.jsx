import React from 'react';
import "../styles/Globals.css";

export default function ResumePreview({
  personalInfo = {},
  summary,
  experiences = [],
  educations = [],
  projects = [],
  onClose = () => {}
}) {
  const {
    name,
    email,
    phone,
    linkedIn,
    gitHub,
    location
  } = personalInfo;

  const formatUrl = (url) => {
    if (!url) return '';
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
  };

  const formatDate = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};

  const renderSummary = () => {
    if (!summary) return null;
    if (Array.isArray(summary)) {
      return (
        <ul className="resumeSummary">
          {summary.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      );
    }
    return <p className="resumeSummary">{summary}</p>;
  };

  return (
    <div className="resumeModal" onClick={onClose}>
      <div className="resumeContainer" onClick={e => e.stopPropagation()}>
        <button className="closeBtn" onClick={onClose}>×</button>

        {/* Header */}
        {name && <h1>{name}</h1>}
        {(email || phone || linkedIn || gitHub || location) && (
          <p className="contactInfo">
            {location && <span>Location: {location}</span>}
            {email && <span> | Email: {email}</span>}
            {phone && <span> | Phone: {phone}</span>}
            <div className="contactInfo">
                {linkedIn && (
                  <span>
                    {' '}LinkedIn:&nbsp;
                    <a href={formatUrl(linkedIn)} target="_blank" rel="noopener noreferrer">
                      {linkedIn}
                    </a>
                  </span>
                )}
                {gitHub && (
                  <span>
                    {' '}| GitHub:&nbsp;
                    <a href={formatUrl(gitHub)} target="_blank" rel="noopener noreferrer">
                      {gitHub}
                    </a>
                  </span>
                )}
            </div>
          </p>
        )}

        {/* Summary */}
        {renderSummary()}

        {/* Education */}
        {educations.length > 0 && (
          <section>
            <h2>Education</h2>
            {educations.map((edu, i) => (
              <div key={i} className="resumeSectionItem">
                <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
                <p className="dateRange">
                  {edu.university} | {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <section>
            <h2>Experience</h2>
            {experiences.map((exp, i) => (
              <div key={i} className="resumeSectionItem">
                <h3>{exp.position} — {exp.company}</h3>
                <p className="dateRange">{formatDate(exp.startDate)} – {formatDate(exp.endDate)}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2>Projects</h2>
            {projects.map((proj, i) => (
              <div key={i} className="resumeSectionItem">
                <h3>{proj.projectTitle}</h3>
                <p>{proj.projectDescription}</p>
                <p>{proj.projectResponsibilities}</p>
                {proj.projectLink && (
                  <p>
                    <strong>Link:</strong>{' '}
                    <a
                      href={formatUrl(proj.projectLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.projectLink}
                    </a>
                  </p>
                )}
                {proj.projectTechStack && (
                  <p><strong>Tech Stack:</strong> {proj.projectTechStack}</p>
                )}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}