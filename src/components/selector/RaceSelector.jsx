import races from '../../gamedata/races'

import RaceElement from '../hoverable/RaceElement';

function RaceSelector(props) {
    const racesHtml = Object.keys(races).map(race => {
        return <RaceElement name={race} key={race} onClick={props.onSelectionClick} />;
    });
    return (
        <div hidden={!props.active}>
            <div className="title">Choose a Race</div>
            <br/>
            {racesHtml}
            <br/>
            <button onClick={props.onSelectionClick}>Cancel</button>
        </div>
    );
}

export default RaceSelector;