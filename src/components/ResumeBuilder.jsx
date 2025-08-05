// src/components/ResumeBuilder.jsx
import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Experience      from "./Experience";
import Education       from "./Education";
import Project         from "./Project";
import ResumePreview   from "./ResumePreview";
import NavBar          from "./NavBar";
// import "../styles/ResumeBuilder.css";
import "../styles/Globals.css";

export default function ResumeBuilder() {
  // ---- Lifted states ----
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    gitHub: "",
    location: ""
  });
  const [experiences,   setExperiences]   = useState([]);
  const [educations,    setEducations]    = useState([]);
  const [projects,      setProjects]      = useState([]);
  const [showPreview,   setShowPreview]   = useState(false);
  const [activeTab,     setActiveTab]     = useState("personal");

  const tabs = [
    { key: "personal", label: "Personal" },
    { key: "education", label: "Education" },
    { key: "experience", label: "Experience" },
    { key: "projects", label: "Projects" } 
  ];

  // ---- Handlers for PersonalDetails ----
  const handlePersonalChange = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value
    });
  };
  const handlePersonalClear = () => {
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      linkedIn: "",
      gitHub: "",
      location: ""
    });
  };
  // We don’t really need anything special on “Save”—we’re already updating on change.
  const handlePersonalSave = () => {};

  return (
    <div className="resumeBuilder">
      <NavBar items={tabs} activeKey={activeTab} onSelect={setActiveTab} />
      
      <div className="content">
        {/* 1) Personal Details */}
        {activeTab === "personal" && (
          <PersonalDetails
            fields={personalInfo}
            handleChange={handlePersonalChange}
            handleSave={handlePersonalSave}
            handleClear={handlePersonalClear}
          />
        )}
        {/* 2) Experience, Education, Projects */}
        {activeTab === "education" && (
          <Education
            educations={educations}
            setEducations={setEducations}
          />
        )}
        {activeTab === "experience" && (
          <Experience
            experiences={experiences}
            setExperiences={setExperiences}
          />
        )}
        {activeTab === "projects" && (
          <Project
            projects={projects}
            setProjects={setProjects}
          />
        )}
        {/* 3) Preview Button */}
        <div className="previewBtnContainer">
          <button
            className="previewBtn"
            onClick={() => setShowPreview(true)}
          >
            Preview Resume
          </button>
        </div>
        {/* 4) Preview Modal */}
        {showPreview && (
          <ResumePreview
            personalInfo={personalInfo}
            experiences={experiences}
            educations={educations}
            projects={projects}
            onClose={() => setShowPreview(false)}
          />
        )}
      </div>
    </div>
  );
}
