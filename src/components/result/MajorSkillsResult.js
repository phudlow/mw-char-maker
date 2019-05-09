import React from 'react';

import SkillElement from '../hoverable/SkillElement';

function MajorSkillsResult(props) {
    const skillElements = [];
    Object.keys(props.skills).forEach(skill => {
        skillElements.push(
            <SkillElement key={skill} value={props.skills[skill]} name={skill} />
        );
    });
    return (
        <div className="major-skills-result">
            <div className="title">Major Skills</div>
            {skillElements}
        </div>
    );
}

export default MajorSkillsResult;