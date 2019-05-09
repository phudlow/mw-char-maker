import React from 'react';

import SkillElement from '../hoverable/SkillElement';

function MiscSkillsResult(props) {
    const skillElements = [];
    Object.keys(props.skills).sort().forEach(skill => {
        skillElements.push(
            <SkillElement key={skill} value={props.skills[skill]} name={skill} />
        );
    });
    return (
        <div className="misc-skills-result">
            <div className="title">Misc Skills</div>
            {skillElements}
        </div>
    );
}

export default MiscSkillsResult;