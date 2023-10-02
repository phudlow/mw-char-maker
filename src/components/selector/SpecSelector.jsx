import SpecElement from '../hoverable/SpecElement';

function SpecSelector(props) {
    return (
        <div hidden={!props.active}>
            <div className="title">Choose a Specialization</div>
            <br/>
            <SpecElement name="combat"  onClick={props.onSelectionClick} />
            <SpecElement name="magic"   onClick={props.onSelectionClick} />
            <SpecElement name="stealth" onClick={props.onSelectionClick} />
            <br/>
            <button onClick={props.onSelectionClick}>Cancel</button>
        </div>
    );
}

export default SpecSelector;