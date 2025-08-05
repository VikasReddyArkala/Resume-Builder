import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import "../styles/Globals.css";

function Project({ projects, setProjects }) {
    const inputProps = [
        { name: "projectTitle", placeholder: "Project Title", type: "text" },
        { name: "projectDescription", placeholder: "Project Description", type: "text" },
        { name: "projectResponsibilities", placeholder: "Responsibilities & Features", type: "textarea" },
        { name: "projectLink", placeholder: "Project Link", type: "text" },
        { name: "projectTechStack", placeholder: "Tech Stack", type: "text" },
    ];

    const [fields, setFields] = useState({
        projectTitle: "",
        projectDescription: "",
        projectResponsibilities: "",
        projectLink: "",
        projectTechStack: ""
    });

    const [editIndex, setEditIndex] = useState(null);

    const handleChange =(e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    }

    const handleAddOrUpdate = () => {
        if (fields.projectTitle) {
            if (editIndex !== null) {
                const updated = projects.map((project, idx) => 
                    idx === editIndex ? fields : project
                );
                setProjects(updated);
                setEditIndex(null);
            } else {
                setProjects([...projects, fields]);
            }
            handleClear();
        }
    }

    const handleClear = () => {
        setFields({
            projectTitle: "",
            projectDescription: "",
            projectResponsibilities: "",
            projectLink: "",
            projectTechStack: ""
        })
    };

    const handleEdit = (idx) => {
        setFields(projects[idx]);
        setEditIndex(idx);
    }

    const handleDelete = (idx) => {
        setProjects(projects.filter((_, index) => index !== idx));
        if (editIndex === idx) handleClear();
    }
    
    return (
        <>
            <Form 
                wrapperClass="project"
                formClass="projectForm"
                btnClass="btn"
                inputProps={inputProps}
                fields={fields}
                handleChange={handleChange}
                handleAddOrUpdate={handleAddOrUpdate}
                handleClear={handleClear}
                submitLabel={editIndex !== null ? "Update" : "Add"}
                clearLabel="Clear"
            />

            <List 
                wrapperClass="projectList"
                titleField="projectTitle"
                items={projects}
                fields={[
                    { key: "projectDescription", label: "Description" },
                    { key: "projectResponsibilities", label: "Responsibilities" },
                    { key: "projectLink", label: "Link" },
                    { key: "projectTechStack", label: "Tech Stack" }
                ]}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </>
    );
}

export default Project;