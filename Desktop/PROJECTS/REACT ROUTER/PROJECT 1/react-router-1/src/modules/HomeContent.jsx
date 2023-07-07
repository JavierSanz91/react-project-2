import React from 'react';
import backgroundImage from "../images/home-background.png";

export default function LandingContent() {
    return (
        <div className="landing-content">
            <img className="background-image" src={backgroundImage} />
            <h1 className="claim">You got the travel plans, we got the travel vans.</h1>
            <p className="secondary-claim">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <button className="find-van">Find your van</button>
        </div>
    );
}
