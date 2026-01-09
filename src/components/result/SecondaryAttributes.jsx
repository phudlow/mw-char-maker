import SecondaryAttributeElement from '../hoverable/SecondaryAttributeElement';

function SecondaryAttributes(props) {
    const baseEndurance = props.birthsign === 'lady' ? props.endurance - 25 : props.endurance;

    const health  = Math.floor((props.strength + baseEndurance) / 2);
    const magicka = props.intelligence * props.magickaMultiplier;
    const fatigue = props.strength + props.willpower + props.agility + props.endurance;

    return (
        <div className="secondary-attributes">
            <SecondaryAttributeElement name="health" value={health}/>
            <SecondaryAttributeElement name="magicka" value={magicka}/>
            <SecondaryAttributeElement name="fatigue" value={fatigue}/>
        </div>
    );
}

export default SecondaryAttributes;