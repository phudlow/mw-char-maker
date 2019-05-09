import React from 'react';

import { toPresentationStr } from '../../utils.js';
import skills from '../../gamedata/skills';

import HoverableElement from './HoverableElement';

class SpecElement extends HoverableElement {
    getTooltip() {
        const skillsHtml = Object.keys(skills).reduce((acc, skill) => {
            if (skills[skill].spec === this.props.name) {
                acc.push(<div key={skill}>{toPresentationStr(skill)}</div>)
            }
            return acc;
        }, [])
        return (
            <div className="tooltip specialization" hidden>
                <div className="title">{toPresentationStr(this.props.name)}</div>
                <br/>
                {skillsHtml}
            </div>
        );
    }
}

export default SpecElement;