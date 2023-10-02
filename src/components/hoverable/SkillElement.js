import React from 'react';

import { toPresentationStr } from '../../utils'
import skills from '../../gamedata/skills';

import HoverableElement from './HoverableElement';

class SkillElement extends HoverableElement {
    getTooltip() {
        const imgSrc = `/src/img/icons/skills/${this.props.name}.png`;
        const description = skills[this.props.name].description;
        const governingAttribute = toPresentationStr(skills[this.props.name].governingAttribute);

        return (
            <div className="tooltip skill" hidden>
                <div className="icon-header">
                    <img src={imgSrc} alt="" />
                    <div className="title">{toPresentationStr(this.props.name)}</div>
                    <div>
                        Governing Attribute:&nbsp;&nbsp;&nbsp;{governingAttribute}
                    </div>
                </div>
                <div>{description}</div>
            </div>
        );
    }
}

export default SkillElement;