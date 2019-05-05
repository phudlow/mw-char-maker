import React from 'react';

import { toPresentationStr } from '../../utils.js';

import specs from '../../gamedata/specializations';

import HoverableElement from './HoverableElement';

class SpecElement extends HoverableElement {
    getTooltip() {
        return (
            <div className="tooltip" hidden>
                <div>
                    <div className="title">{toPresentationStr(this.props.name)}</div>
                </div>
                <div>{specs[this.props.name].description}</div>
            </div>
        );
    }
}

export default SpecElement;