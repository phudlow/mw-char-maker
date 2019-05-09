import React from 'react';

import { toPresentationStr } from '../../utils.js';
import primaryAttributes from '../../gamedata/primaryAttributes';

import HoverableElement from './HoverableElement';

class PrimaryAttributeElement extends HoverableElement {
    getTooltip() {
        return (
            <div className="tooltip primary-attribute" hidden>
                <div className="icon-header">
                    <img src={require(`../../img/icons/primaryAttributes/${this.props.name}.png`)} alt="" />
                    <div className="title">{toPresentationStr(this.props.name)}</div>
                </div>
                <div>{primaryAttributes[this.props.name].description}</div>
            </div>
        );
    }
}

export default PrimaryAttributeElement;