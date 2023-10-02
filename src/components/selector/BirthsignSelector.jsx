import birthsigns from '../../gamedata/birthsigns'

import BirthsignElement from '../hoverable/BirthsignElement';

function BirthsignSelector(props) {
    const birthsignsHtml = Object.keys(birthsigns).map(birthsign => {
        return <BirthsignElement key={birthsign} name={birthsign} onClick={props.onSelectionClick} />;
    });
    return (
        <div hidden={!props.active}>
            <div className="title">Choose a Birthsign</div>
            <br/>
            {birthsignsHtml}
            <br/>
            <button onClick={props.onSelectionClick} >Cancel</button>
        </div>
    );
}

export default BirthsignSelector;