import React, {useState} from 'react';
import Form from "./Form";
import List from "./List";
import "../styles/Globals.css";

function Education ({ educations, setEducations }) {
    const inputProps = [
        { name: "university", placeholder: "University/School" },
        { name: "degree", placeholder: "Degree", type: "select", options: ["Bachelor's", "Master's", "PhD", "Diploma", "Certificate"] },
        { name: "fieldOfStudy", placeholder: "Field of Study" },
        { name: "startDate", placeholder: "Start Date", type: "month" },
        { name: "endDate", placeholder: "End Date", type: "month" }
    ];

    const [fields, setFields] = useState({
        university: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: ""
    });

    const [editIndex, setEditIndex] = useState(null);

    const handleChange =(e) => {
        setFields({ ...fields, [e.target.name] : e.target.value });
    };

    const handleAddOrUpdate = () => {
        if (fields.university) {
            if (editIndex !== null) {
                const updated = educations.map((education, idx) => 
                    idx === editIndex ? fields : education
                );
                setEducations(updated);
                setEditIndex(null); 
            } else {
                setEducations([...educations, fields]);
            }
            handleClear();
        }
    };

    const handleClear = () => {
        setFields({
            university: "",
            degree: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: ""
        });
        setEditIndex(null);
    };

    const handleEdit = (idx) => {
        setFields(educations[idx]);
        setEditIndex(idx);
    };

    const handleDelete = (idx) => {
        setEducations(educations.filter((_, i) => i !== idx));
        if (editIndex === idx) handleClear();
    };

    return (
        <>
            <Form 
                wrapperClass="education"
                formClass="educationForm"
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
                wrapperClass="educationList"
                titleField="degree"
                items={educations}
                fields={[
                    { key: "university", label: "University/School" },
                    { key: "fieldOfStudy", label: "Field of Study" },
                    { key: "startDate", label: "Start Date" },
                    { key: "endDate", label: "End Date" }
                ]}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />

            {/* <div className="educationList">
                {educations.map((education, idx) => (
                    <div key={idx} className="tile">
                        <p 
                            style={{ cursor: "pointer", fontWeight: "bold" }}
                        >
                            {education.degree}
                        </p>
                            <div className="details">
                                <div className="info">
                                    <p>university/School: {education.university}</p>
                                    <p>Start Date: {education.startDate}</p>
                                    <p>End Date: {education.endDate}</p>
                                    <p>Field of Study: {education.fieldOfStudy}</p>
                                </div>
                                <div className="btn">
                                    <button type="button" onClick={() => handleEdit(idx)}>Edit</button>
                                    <button type="button" onClick={() => handleDelete(idx)}>Delete</button>
                                </div>
                            </div>
                    </div>
                ))}
            </div> */}
        </>
    );
}

export default Education;