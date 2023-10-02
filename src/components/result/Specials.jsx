import { Component } from 'react';

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
                this.getStartingSpellsFromSkillValues(),
            )
        }
    }
    getStartingSpellsFromSkillValues() {
        const skillValues = this.props.skillValues;
        const startingSpells = [];

        for (let skillAssignment in skillValues) {
            for (let skillName in skillValues[skillAssignment]) {
                const skillValue = skillValues[skillAssignment][skillName];
                const startingSpellsInSchool = startingSpellsBySchool[skillName]?.spells
                startingSpellsInSchool?.forEach(spell => {
                    if (spell.requiredSkill <= this.calcForStartingSpellsFromSpellSchoolSkillValue(skillValue)) {
                        startingSpells.push(spell);
                    }
                });
            }
        }

        return startingSpells;
    }
    calcForStartingSpellsFromSpellSchoolSkillValue(skillValue) {
        const primaryAttributes = this.props.primaryAttributes;
        const willpower         = primaryAttributes.willpower;
        const luck              = primaryAttributes.luck;

        return skillValue * 2 + willpower / 5 + luck / 10;
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