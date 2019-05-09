import React from 'react';

import { createSpecialsHtml } from '../../utils';
import birthsigns from '../../gamedata/birthsigns';

import HoverableElement from './HoverableElement';

class BirthsignElement extends HoverableElement {
    getFormattedName() {
        return `The ${super.getFormattedName()}`;
    }
    getTooltip() {
        return (
            <div className="tooltip" hidden>
                <div className="title">{this.getFormattedName()}</div>
                <br/>
                {createSpecialsHtml(birthsigns[this.props.name].specials)}
                {/* <div>
                    <img src={require(`../../img/icons/skills/${this.props.name}.png`)} alt="" />
                    <div className="title">{toPresentationStr(this.props.name)}</div>
                    <div>Governing Attribute: {toPresentationStr(skills[this.props.name].governingAttribute)}</div>
                </div>
                <div>{skills[this.props.name].description}</div> */}
            </div>
        );
    }
}

export default BirthsignElement;