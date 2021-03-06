import React from 'react';

import { toPresentationStr } from '../../utils.js';
import primaryAttributes from '../../gamedata/primaryAttributes';

import HoverableElement from './HoverableElement';

class PrimaryAttributeElement extends HoverableElement {
    getTooltip() {
        const imgSrc = require(`../../img/icons/primaryAttributes/${this.props.name}.png`);
        const description = primaryAttributes[this.props.name].description;

        return (
            <div className="tooltip primary-attribute" hidden>
                <div className="icon-header">
                    <img src={imgSrc} alt="" />
                    <div className="title">{toPresentationStr(this.props.name)}</div>
                </div>
                <div>{description}</div>
            </div>
        );
    }
}

export default PrimaryAttributeElement;