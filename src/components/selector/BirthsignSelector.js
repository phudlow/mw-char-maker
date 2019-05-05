import React from 'react';

import birthsigns from '../../gamedata/birthsigns.js';
import BirthsignElement from '../hoverable/BirthsignElement';

function BirthsignSelector(props) {
    const birthsignsHtml = Object.keys(birthsigns).map(birthsign => {
        return <BirthsignElement key={birthsign} name={birthsign} onClick={props.onSelectionClick} />;
    });
    return (
        <div hidden={!props.active}>
            Choose a Birthsign
            <br/><br/>
            {birthsignsHtml}
            <br/>
            <button onClick={props.onSelectionClick} >Cancel</button>
        </div>
    );
}

export default BirthsignSelector;