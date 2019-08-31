import React, { Component } from 'react';

import { createSpecialsHtml } from '../../utils';
import races from '../../gamedata/races';
import birthsigns from '../../gamedata/birthsigns';
import startingSpellsBySchool from '../../gamedata/startingSpellsBySchool';

class Specials extends Component {
    constructor(props) {
        super(props);

        this.getSpecials = this.getSpecials.bind(this);
    }
    getSpecials() {
        const raceSpecials      = races[this.props.race].specials;
        const birthsignSpecials = birthsigns[this.props.birthsign].specials;
        const chosenSkills      = this.props.chosenSkills;
        const magicSchoolSpells = Object.keys(startingSpellsBySchool).reduce((acc, school) => {
            if (chosenSkills.indexOf(school) !== -1) {
                return Array.prototype.concat(acc, startingSpellsBySchool[school].spells)
            }
            return acc;
        }, []);

        return {
            abilities: Array.prototype.concat(
                raceSpecials.abilities      || [],
                birthsignSpecials.abilities || []
            ),
            powers: Array.prototype.concat(
                raceSpecials.powers         || [],
                birthsignSpecials.powers    || []
            ),
            spells: Array.prototype.concat(
                raceSpecials.spells         || [],
                birthsignSpecials.spells    || [],
                magicSchoolSpells
            )
        }
    }
    render() {
        const specialsHtml = createSpecialsHtml(this.getSpecials());

        return (
            <div id="specials">
                {specialsHtml}
            </div>
        );
    }
}

export default Specials;