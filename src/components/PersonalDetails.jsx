import React, { useState } from "react";
import '../styles/PersonalDetails.css';

function PersonalDetails() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [gitHub, setGitHub] = useState("");
    const [location, setLocation] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleLinkedInChange = (e) => setLinkedIn(e.target.value);
    const handleGitHubChange = (e) => setGitHub(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleClear = () => {
        setName('');
        setEmail('');
        setPhone('');
        setLinkedIn('');
        setGitHub('');
        setLocation('');
    }

    return (
        <form className="personalDetails">
            <div className="fullName"><input placeholder="Full Name" value={name} onChange={handleNameChange}/></div>
            <div className="email"><input type="Email" placeholder="Email" value={email} onChange={handleEmailChange}/></div>
            <div className="phone"><input placeholder="Phone Number" value={phone} onChange={handlePhoneChange}/></div>
            <div className="linkedIn"><input placeholder="LinkedIn URL" value={linkedIn} onChange={handleLinkedInChange}/></div>
            <div className="github"><input placeholder="GitHub URL" value={gitHub} onChange={handleGitHubChange}/></div>
            <div className="location"><input placeholder="location" value={location} onChange={handleLocationChange}/></div>
            <div className="btn">
                <button type="button">Save</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </div>
        </form>
    )
}

export default PersonalDetails;