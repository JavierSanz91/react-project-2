import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Filters.css';


const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", 
    "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", 
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const industries = [
    "Healthcare", "Retail", "Education", "Government", "Technology", "Financial Services", 
    "Manufacturing", "Non-Profit", "Transportation and Warehousing", "Construction", 
    "Hospitality", "Professional Services", "Food Services", "Arts and Entertainment", 
    "Real Estate", "Agriculture", "Energy", "Publishing", "Telecommunications", "Pharmaceutical"
];

const seniorityLevels = ["Entry", "Mid", "Senior", "Executive", "Non-specified"];

export default function Filters() {
    const [selectedState, setSelectedState] = useState("Location");
    const [selectedIndustry, setSelectedIndustry] = useState("Industry");
    const [selectedSeniority, setSelectedSeniority] = useState("Seniority");

    const handleSelectState = (e) => {
        setSelectedState(e);
    }

    const handleSelectIndustry = (e) => {
        setSelectedIndustry(e);
    }

    const handleSelectSeniority = (e) => {
        setSelectedSeniority(e);
    }

    return (
        <div>
            <div className="filtersContainer">
                <Dropdown onSelect={handleSelectState}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {selectedState}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {states.map((state, index) => 
                        <Dropdown.Item key={index} eventKey={state}>{state}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown onSelect={handleSelectIndustry}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {selectedIndustry}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {industries.map((industry, index) => 
                        <Dropdown.Item key={index} eventKey={industry}>{industry}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown onSelect={handleSelectSeniority}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {selectedSeniority}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {seniorityLevels.map((level, index) => 
                        <Dropdown.Item key={index} eventKey={level}>{level}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="resultsInfo">
                <p><span className="resultsInfoBold">85 jobs </span> in <span className="resultsInfoBold"> all locations </span> in all industries in all <span className="resultsInfoBold"> seniority </span></p>
            </div>
        </div>
    );
}