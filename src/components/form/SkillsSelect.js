import React from 'react';

function SkillsSelect(props) {
    return (
        <select 
            value={props.value}
            onChange={props.onChange}
            index={props.index}
        >

            <optgroup label="Combat">
                <option value="armorer">Armorer</option>
                <option value="athletics">Athletics</option>
                <option value="axe">Axe</option>
                <option value="block">Block</option>
                <option value="blunt_weapon">Blunt Weapon</option>
                <option value="heavy_armor">Heavy Armor</option>
                <option value="long_blade">Long Blade</option>
                <option value="medium_armor">Medium Armor</option>
                <option value="spear">Spear</option>
            </optgroup>

            <optgroup label="Magic">
                <option value="alchemy">Alchemy</option>
                <option value="alteration">Alteration</option>
                <option value="conjuration">Conjuration</option>
                <option value="destruction">Destruction</option>
                <option value="enchant">Enchant</option>
                <option value="illusion">Illusion</option>
                <option value="mysticism">Mysticism</option>
                <option value="restoration">Restoration</option>
                <option value="unarmored">Unarmored</option>
            </optgroup>

            <optgroup label="Stealth">
                <option value="acrobatics">Acrobatics</option>
                <option value="hand_to_hand">Hand to Hand</option>
                <option value="short_blade">Short Blade</option>
                <option value="light_armor">Light Armor</option>
                <option value="marksman">Marksman</option>
                <option value="mercantile">Mercantile</option>
                <option value="security">Security</option>
                <option value="sneak">Sneak</option>
                <option value="speechcraft">Speechcraft</option>
            </optgroup>
        </select>
    );
}

export default SkillsSelect;