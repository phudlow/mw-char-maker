import React from 'react';

import skills from '../../gamedata/skills.js';

import SkillElement from '../hoverable/SkillElement';

function SkillSelector(props) {
    const htmlBySpec = {
        combat: [],
        magic: [],
        stealth: []
    };
    for (let skill in skills) {
        htmlBySpec[skills[skill].spec].push(<SkillElement key={skill} name={skill} onClick={props.onSelectionClick} />)
    }
    return (
        <div className="skill-select-popup" hidden={!props.active}>
            <div className="title">Choose a Skill</div>
            <br/>
            <div>
                <div className="title">Combat</div>
                {htmlBySpec.combat}
            </div>
            <div>
                <div className="title">Magic</div>
                {htmlBySpec.magic}
            </div>
            <div>
                <div className="title">Stealth</div>
                {htmlBySpec.stealth}
            </div>
            <br/><br/>
            <button onClick={props.onSelectionClick}>Cancel</button>
        </div>
    );
}

export default SkillSelector;