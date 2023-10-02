import React from 'react';

import PrimaryAttributeElement from '../hoverable/PrimaryAttributeElement';

function PrimaryAttributes(props) {
    return (
        <div className="primary-attributes">
            <PrimaryAttributeElement name="strength" value={props.strength} />
            <PrimaryAttributeElement name="intelligence" value={props.intelligence} />
            <PrimaryAttributeElement name="willpower" value={props.willpower} />
            <PrimaryAttributeElement name="agility" value={props.agility} />
            <PrimaryAttributeElement name="speed" value={props.speed} />
            <PrimaryAttributeElement name="endurance" value={props.endurance} />
            <PrimaryAttributeElement name="personality" value={props.personality} />
            <PrimaryAttributeElement name="luck" value={props.luck} />
        </div>
    );
}

export default PrimaryAttributes;