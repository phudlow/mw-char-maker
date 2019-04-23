import React from 'react';

function PrimaryAttributes(props) {
    // TODO: Calculations here
    return (
        <div className="primary-attributes">
            <div><span>Strength</span><span>{props.strength}</span></div>
            <div><span>Intelligence</span><span>{props.intelligence}</span></div>
            <div><span>Willpower</span><span>{props.willpower}</span></div>
            <div><span>Agility</span><span>{props.agility}</span></div>
            <div><span>Speed</span><span>{props.speed}</span></div>
            <div><span>Endurance</span><span>{props.endurance}</span></div>
            <div><span>Personality</span><span>{props.personality}</span></div>
            <div><span>Luck</span><span>{props.luck}</span></div>
        </div>
    );
}

export default PrimaryAttributes;