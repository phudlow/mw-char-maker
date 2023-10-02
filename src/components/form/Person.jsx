import React from 'react';

import { toPresentationStr } from '../../utils';

import RaceElement from '../hoverable/RaceElement';

function Person(props) {
    return (
        <div id="person">
            <div className="title">Race</div>
            <RaceElement
                onClick={props.eventHandlers.onRaceClick}
                name={props.race}
            />
            <br/>
            <div className="title">Sex</div>
            <div className="sex-selector" onClick={props.eventHandlers.onSexClick}>
                {toPresentationStr(props.sex)}
                <span>⮞</span>
            </div>
        </div>
    );
}

export default Person;