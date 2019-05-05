import React from 'react';

import SkillElement from '../hoverable/SkillElement';

function MajorSkillsResult(props) {
    const skillElements = [];
    Object.keys(props.skills).sort().forEach(skill => {
        skillElements.push(
            <SkillElement key={skill} value={props.skills[skill]} name={skill} />
        );
    });
    return (
        <div className="major-skills-result">
            Major Skills
            <br/>
            {skillElements}
        </div>
    );
}

export default MajorSkillsResult;