import React from 'react';

import { toPresentationStr } from '../../utils.js';
import skills from '../../gamedata/skills';

import HoverableElement from './HoverableElement';

class SkillElement extends HoverableElement {
    getTooltip() {
        return (
            <div className="tooltip skill" hidden>
                <div className="icon-header">
                    <img src={require(`../../img/icons/skills/${this.props.name}.png`)} alt="" />
                    <div className="title">{toPresentationStr(this.props.name)}</div>
                    <div>Governing Attribute:&nbsp;&nbsp;&nbsp;{toPresentationStr(skills[this.props.name].governingAttribute)}</div>
                </div>
                <div>{skills[this.props.name].description}</div>
            </div>
        );
    }
}

export default SkillElement;