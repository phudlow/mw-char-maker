import React from 'react';

import { toPresentationStr } from '../../utils.js';

function MinorSkillsResult(props) {
    const skillElements = [];
    Object.keys(props.skills).sort().forEach(skill => {
        skillElements.push(<div key={skill}><span>{toPresentationStr(skill)}</span><span>{props.skills[skill]}</span></div>)
    });
    return (
        <div className="misc-skills-result">
            Misc Skills
            <br/>
            {skillElements}
        </div>
    );
}

export default MinorSkillsResult;