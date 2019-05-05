import React from 'react';

import RaceSelector from './RaceSelector';
import SpecSelector from './SpecSelector';
import AttributeSelector from './AttributeSelector';
import SkillSelector from './SkillSelector';
import BirthsignSelector from './BirthsignSelector';

function SelectorContainer(props) {
    const selectingFor = props.selecting && props.selecting.for;
    return (
        <div className="selector-container" style={{display: selectingFor ? 'flex' : 'none'}}>
            <RaceSelector 
                active={selectingFor === 'race'}
                onSelectionClick={props.onSelectionClick}
            />
            <SpecSelector 
                active={selectingFor === 'specialization'} 
                onSelectionClick={props.onSelectionClick}
            />
            <AttributeSelector
                active={selectingFor === 'favoredAttribute'}
                onSelectionClick={props.onSelectionClick}
            />
            <SkillSelector
                active={selectingFor && selectingFor.includes('Skills')}
                onSelectionClick={props.onSelectionClick}
            />
            <BirthsignSelector
                active={selectingFor === 'birthsign'}
                onSelectionClick={props.onSelectionClick}
            />
        </div>
    );
}

export default SelectorContainer;