import React from 'react';

function Birthsign(props) {
    return (
        <label>
            Birthsign
            <br/>
            <select
                defaultValue={props.birthsign}
                onChange={props.changeHandlers.birthsignChange}
            >
                <option value="apprentice">The Apprentice</option>
                <option value="atronach">The Atronach</option>
                <option value="lady">The Lady</option>
                <option value="lord">The Lord</option>
                <option value="lover">The Lover</option>
                <option value="mage">The Mage</option>
                <option value="ritual">The Ritual</option>
                <option value="serpent">The Serpent</option>
                <option value="shadow">The Shadow</option>
                <option value="steed">The Steed</option>
                <option value="thief">The Thief</option>
                <option value="tower">The Tower</option>
                <option value="warrior">The Warrior</option>
            </select>
        </label>
    );
}

export default Birthsign;