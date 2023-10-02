import primaryAttributes from '../../gamedata/primaryAttributes';

import PrimaryAttributeElement from '../hoverable/PrimaryAttributeElement';

function AttributeSelector(props) {
    const attributeHtml = Object.keys(primaryAttributes).map(attr => {
        return <PrimaryAttributeElement key={attr} name={attr} onClick={props.onSelectionClick} />
    });
    return (
        <div hidden={!props.active}>
            <div className="title">Choose an Attribute</div>
            <br/>
            {attributeHtml}
            <br/>
            <button onClick={props.onSelectionClick}>Cancel</button>
        </div>
    );
}

export default AttributeSelector;