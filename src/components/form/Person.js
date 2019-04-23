import React from 'react';

function Person(props) {
    return (
        <div>
            <label>
                Name
                <br/>
                <input type="text" defaultValue={props.name} onChange={props.changeHandlers.nameChange}/>
            </label>
            <br/>
            <label>
                Race
                <br/>
                <select defaultValue={props.race} onChange={props.changeHandlers.raceChange}>
                    <option value="argonian">Argonian</option>
                    <option value="breton">Breton</option>
                    <option value="dark_elf">Dark Elf</option>
                    <option value="high_elf">High Elf</option>
                    <option value="imperial">Imperial</option>
                    <option value="khajiit">Khajiit</option>
                    <option value="nord">Nord</option>
                    <option value="orc">Orc</option>
                    <option value="redguard">Redguard</option>
                    <option value="wood_elf">Wood Elf</option>
                </select>
            </label>
            <br/>
            <label>
                Sex
                <br/>
                <select defaultValue={props.sex} onChange={props.changeHandlers.sexChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
        </div>
    );
}

export default Person;