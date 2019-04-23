import React from 'react';

function AttributeSelect(props) {
    return (
        <select
            value={props.value}
            onChange={props.onChange}
            index={props.index}
        >
            <option value="strength">Strength</option>
            <option value="intelligence">Intelligence</option>
            <option value="willpower">Willpower</option>
            <option value="agility">Agility</option>
            <option value="speed">Speed</option>
            <option value="endurance">Endurance</option>
            <option value="luck">Luck</option>
        </select>
    );
}

export default AttributeSelect;