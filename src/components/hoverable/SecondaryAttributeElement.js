import React from 'react';

import { toPresentationStr } from '../../utils.js';
import secondaryAttributes from '../../gamedata/secondaryAttributes';

import HoverableElement from './HoverableElement';

class SecondaryAttributeElement extends HoverableElement {
    render() {
        return (
            <div
                className="hoverable"
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
            >
                <span>{toPresentationStr(this.props.name)}</span>
                <span className={this.props.name}>{this.props.value}/{this.props.value}</span>
                {this.getTooltip()}
            </div>
        );
    }
    getTooltip() {
        return (
            <div className="tooltip secondary-attribute" hidden>
                <div className="icon-header">
                    <img src={require(`../../img/icons/secondaryAttributes/${this.props.name}.png`)} alt="" />
                    <div>{secondaryAttributes[this.props.name].description}</div>
                    <br/>
                    <div className="value">{this.props.value} / {this.props.value}</div>
                </div>
            </div>
        );
    }
}

export default SecondaryAttributeElement;