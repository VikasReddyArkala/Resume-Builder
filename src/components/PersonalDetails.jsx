// src/components/PersonalDetails.jsx
import React from "react";
import Form from "./Form";
import "../styles/Globals.css";

export default function PersonalDetails({
  fields,
  handleChange,
  handleSave,
  handleClear
}) 

{
  const inputProps = [
    { name: "name",        placeholder: "Full Name" },
    { name: "email",       placeholder: "Email",      type: "email" },
    { name: "phone",       placeholder: "Phone" },
    { name: "linkedIn",    placeholder: "LinkedIn URL" },
    { name: "gitHub",      placeholder: "GitHub URL" },
    { name: "location",    placeholder: "Location" }
  ];

  return (
    <>
      <Form
      wrapperClass="personalDetails"
      formClass="personalDetailsForm"
      btnClass="btn"
      inputProps={inputProps}
      fields={fields}
      handleChange={handleChange}
      handleAddOrUpdate={handleSave}
      handleClear={handleClear}
      submitLabel="Save"
      clearLabel="Clear"
    />
    </>
  );
}
