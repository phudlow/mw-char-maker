import React from 'react';

import { toPresentationStr, createSpecialsHtml } from '../../utils';
import races from '../../gamedata/races';

import HoverableElement from './HoverableElement';

class RaceElement extends HoverableElement {

    getTooltip() {
        return (
            <div className="tooltip race" hidden>
                <div className="title">{toPresentationStr(this.props.name)}</div>
                {/* <br/> */}
                {/* <div>{races[this.props.name].description}</div> */}
                <br/>
                <div className="stats">
                    <div>
                        <div className="title">Skill Bonuses</div>
                        {Object.keys(races[this.props.name].skills).map(skill => {
                            return (
                                <div key={skill}>
                                    <span>{toPresentationStr(skill)}</span>
                                    <span>{races[this.props.name].skills[skill]}</span>                                    
                                </div>
                            )
                        })}
                    </div>
                    <div>{createSpecialsHtml(races[this.props.name].specials)}</div>
                </div>
            </div>
        );
    }
}

export default RaceElement;