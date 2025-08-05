import React from 'react';

function Form({
    wrapperClass = "", 
    formClass = "", 
    btnClass = "",
    inputProps = [],
    fields = {},
    handleChange = () => {},
    handleAddOrUpdate = () => {},
    handleClear = () => {},
    submitLabel = "Submit",
    clearLabel = "Clear",
}) {
    return (
        <div className={wrapperClass}>
                <form className={formClass}>
                    {inputProps.map((input) => {
                        const { name, placeholder, type, options } = input;
                        return (
                            <div key={name} className={name}>
                                {input.type === "textarea" ? (
                                    <textarea 
                                        name={name}
                                        placeholder={placeholder}
                                        value={fields[name]}
                                        rows={4}
                                        onChange={handleChange}
                                    />
                                )  : type === "select" ? (
                                <select
                                    id={name}
                                    name={name}
                                    value={fields[name]}
                                    onChange={handleChange}
                                    >
                                    <option value="" disabled>{placeholder || "Select..."}</option>
                                    {Array.isArray(options) && options.map((opt) => (
                                        <option key={opt} value={opt}>
                                        {opt}
                                        </option>
                                    ))}
                                    </select>
                                ) : (
                                    <input 
                                        name={name}
                                        type={type || "text"}
                                        placeholder={placeholder}
                                        value={fields[name] || ""}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        );
                    })}
                </form>
                <div className={btnClass}>
                    <button type="button" onClick={handleAddOrUpdate}>
                        {submitLabel}
                    </button>
                    <button type="button" onClick={handleClear}>{clearLabel}</button>
                </div>
            </div>
    )
}

export default Form;