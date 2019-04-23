import React from 'react';

function SecondaryAttributes(props) {
    const health  = Math.floor((props.strength + props.endurance) / 2);
    const magicka = props.intelligence * props.magickaMultiplier;
    const fatigue = props.strength + props.willpower + props.agility + props.endurance;

    return (
        <div className="secondary-attributes">
            <div><span>Health</span><span className="health">{health}/{health}</span></div>
            <div><span>Magicka</span><span className="magicka">{magicka}/{magicka}</span></div>
            <div><span>Fatigue</span><span className="fatigue">{fatigue}/{fatigue}</span></div>
        </div>
    );
}

export default SecondaryAttributes;