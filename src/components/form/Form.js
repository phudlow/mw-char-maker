import React from 'react';

import Person from './Person';
import Class from './Class';
import Birthsign from './Birthsign';

function Form(props) {
    return (
        <div id="form">
            <Person
                changeHandlers={props.changeHandlers.person}
                name={props.data.name}
                race={props.data.race}
                sex={props.data.sex}
            />
            <Class
                changeHandlers={props.changeHandlers.class}
                specialization={props.data.specialization}
                favoredAttributes={props.data.favoredAttributes}
                majorSkills={props.data.majorSkills}
                minorSkills={props.data.minorSkills}
            />
            <Birthsign
                changeHandlers={props.changeHandlers.birthsign}
                birthsign={props.data.birthsign}
            />
        </div>
    );
}

export default Form;