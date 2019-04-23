import React from 'react';

import { toPresentationStr } from '../../utils.js';

function MajorSkillsResult(props) {
    const skillElements = [];
    for (let skill in props.skills) {
        skillElements.push(<div key={skill}><span>{toPresentationStr(skill)}</span><span>{props.skills[skill]}</span></div>)
    }
    return (
        <div className="major-skills-result">
            Major Skills
            <br/>
            {skillElements}
        </div>
    );
}

export default MajorSkillsResult;