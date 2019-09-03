import React from 'react';

import BirthsignElement from '../hoverable/BirthsignElement';

function Birthsign(props) {
    return (
        <div id="birthsign">
            <div className="title">Birthsign</div>
            <BirthsignElement
                name={props.birthsign}
                onClick={props.eventHandlers.onBirthsignClick}
            />
        </div>
    );
}

export default Birthsign;