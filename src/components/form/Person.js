import React from 'react';

import { toPresentationStr } from '../../utils';

import RaceElement from '../hoverable/RaceElement';

function Person(props) {
    console.log(props);
    return (
        <div>
            <label>
                <div className="title">Name</div>
                <input type="text" defaultValue={props.name} onChange={props.eventHandlers.onNameChange}/>
            </label>
            <br/>
            <div className="title">Race</div>
            <RaceElement onClick={props.eventHandlers.onRaceClick} name={toPresentationStr(props.race)} />
            <div className="title">Sex</div>
            <div onClick={props.eventHandlers.onSexClick}>{toPresentationStr(props.sex)}</div>
        </div>
    );
}

export default Person;