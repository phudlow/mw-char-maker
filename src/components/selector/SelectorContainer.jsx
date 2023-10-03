import RaceSelector from './RaceSelector';
import SpecSelector from './SpecSelector';
import AttributeSelector from './AttributeSelector';
import SkillSelector from './SkillSelector';
import BirthsignSelector from './BirthsignSelector';
import Help from './Help';
import { useCallback } from 'react';

function SelectorContainer(props) {
    const selectingFor = props.selecting && props.selecting.aspect;

    const handleOverlayInteraction = useCallback((e) => {
        e.target.className.includes("selector-container") &&
        props.onSelectionClick(null, null, null);
    }, [])

    return (
        <div
            className="selector-container"
            style={{display: selectingFor ? 'flex' : 'none'}}
            onClick={handleOverlayInteraction}
            onTouchEnd={handleOverlayInteraction}
        >
            <RaceSelector
                active={selectingFor === 'race'}
                onSelectionClick={props.onSelectionClick}
            />
            <SpecSelector
                active={selectingFor === 'specialization'}
                onSelectionClick={props.onSelectionClick}
            />
            <AttributeSelector
                active={selectingFor === 'favoredAttributes'}
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
            <Help
                active={selectingFor === 'help'}
                onSelectionClick={props.onSelectionClick.bind(null, null, null)}
            />
        </div>
    );
}

export default SelectorContainer;