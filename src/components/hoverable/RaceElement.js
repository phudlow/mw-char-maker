import React from 'react';

// import races from '../../gamedata/races';

import HoverableElement from './HoverableElement';

class RaceElement extends HoverableElement {
    getTooltip() {
        return (
            <div className="tooltip" hidden>
                {this.props.name}
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

export default RaceElement;