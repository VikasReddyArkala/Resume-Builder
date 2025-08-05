import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "../styles/Globals.css";

function Experience({ experiences, setExperiences }) {

    const [fields, setFields] = useState({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: ""
    });

    const [editIndex, setEditIndex] = useState(null);

    const inputProps = [
        { name: "company", placeholder: "Company Name" },
        { name: "position", placeholder: "Job Title" },
        { name: "startDate", placeholder: "Start Date", type: "month" },
        { name: "endDate", placeholder: "End Date", type: "month" },
        { name: "description", placeholder: "Job Description", type: "textarea" }
    ];

    const handleChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    const handleAddOrUpdate = () => {
        if (fields.company && fields.position) {
            if (editIndex !== null) {
                const updated = experiences.map((experience, idx) => 
                    idx === editIndex ? fields : experience
                );
                setExperiences(updated);
                setEditIndex(null);
            } else {
                setExperiences([...experiences, fields]);
            }
            handleClear();
        }
    };

    const handleClear = () => {
        setFields({
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            description: ""
        });
        setEditIndex(null);
    };

    const handleEdit = (idx) => {
        setFields(experiences[idx]);
        setEditIndex(idx);
    };

    const handleDelete = (idx) => {
        setExperiences(experiences.filter((_, i) => i !== idx));
        if (editIndex === idx) handleClear();
        // setExpandedIndices(expandedIndices.filter(i => i !== idx));
    };

    // const handleExpand = (idx) => {
    //     if (expandedIndices.includes(idx)) {
    //         setExpandedIndices(expandedIndices.filter(i => i !== idx));
    //     } else {
    //         setExpandedIndices([...expandedIndices, idx]);
    //     }
    // }
    
    return (
        <>
            <Form
                wrapperClass="experience"
                formClass="experienceForm"
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
                wrapperClass="experienceList"
                titleField="company"
                items={experiences}
                fields={[
                    { key: "position", label: "Position" },
                    { key: "startDate", label: "Start Date" },
                    { key: "endDate", label: "End Date" },
                    { key: "description", label: "Description" }
                ]}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />

            {/* <div className="experienceList">
                {experiences.map((experience, idx) => (
                    <div key={idx} className="tile">
                        <p 
                            style={{ cursor: "pointer", fontWeight: "bold" }}
                            onClick={() => handleExpand(idx)}
                        >
                            {experience.company}
                        </p>
                        {expandedIndices.includes(idx) && (
                            <div className="details">
                                <div className="info">
                                    <p>Position: {experience.position}</p>
                                    <p>Start Date: {experience.startDate}</p>
                                    <p>End Date: {experience.endDate}</p>
                                    <p>Description: {experience.description}</p>
                                </div>
                                <div className="btn">
                                    <button type="button" onClick={() => handleEdit(idx)}>Edit</button>
                                    <button type="button" onClick={() => handleDelete(idx)}>Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div> */}
        </>
    );
}

export default Experience;