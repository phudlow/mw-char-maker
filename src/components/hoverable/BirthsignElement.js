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
            </div>
        );
    }
}

export default BirthsignElement;