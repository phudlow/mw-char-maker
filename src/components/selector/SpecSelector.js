import React from 'react';

import specs from '../../gamedata/specializations';
import SpecElement from '../hoverable/SpecElement';

function SpecSelector(props) {
    const specsHtml = Object.keys(specs).map(spec => {
        return <SpecElement key={spec} name={spec} onClick={props.onSelectionClick} />;
    });
    return (
        <div hidden={!props.active}>
            Choose a Specialization
            <br/><br/>
            {specsHtml}
            <br/>
            <button onClick={props.onSelectionClick}>Cancel</button>
        </div>
    );
}

export default SpecSelector;