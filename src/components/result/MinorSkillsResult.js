import React from 'react';

import SkillElement from '../hoverable/SkillElement';

function MinorSkillsResult(props) {
    const skillElements = [];
    Object.keys(props.skills).sort().forEach(skill => {
        skillElements.push(
            <SkillElement key={skill} value={props.skills[skill]} name={skill} />
        );
    });
    return (
        <div className="minor-skills-result">
            Minor Skills
            <br/>
            {skillElements}
        </div>
    );
}

export default MinorSkillsResult;