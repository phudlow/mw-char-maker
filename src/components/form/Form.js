import React from 'react';

import Person from './Person';
import Class from './Class';
import Birthsign from './Birthsign';

function Form(props) {
    return (
        <div id="form">
            {/* <br/><br/> */}
            <Person
                eventHandlers={props.eventHandlers.person}
                name={props.data.name}
                race={props.data.race}
                sex={props.data.sex}
            />
            <Class
                eventHandlers={props.eventHandlers.class}
                specialization={props.data.specialization}
                favoredAttributes={props.data.favoredAttributes}
                majorSkills={props.data.majorSkills}
                minorSkills={props.data.minorSkills}
            />
            <Birthsign
                eventHandlers={props.eventHandlers.birthsign}
                birthsign={props.data.birthsign}
            />
        </div>
    );
}

export default Form;