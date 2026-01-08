import { Component } from 'react';

import { createSpecialsHtml } from '../../utils';
import races from '../../gamedata/races';
import birthsigns from '../../gamedata/birthsigns';
import startingSpells from '../../gamedata/startingSpells';

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
        const playerStartingSpells = [];

        for (let skillAssignment in skillValues) {
            for (let skillName in skillValues[skillAssignment]) {
                const skillValue = skillValues[skillAssignment][skillName];
                const startingSpellsInSchool = startingSpells.filter((spell) => {
                    return spell.school === skillName;
                });
                startingSpellsInSchool?.forEach(spell => {
                    if (spell.requiredValue <= this.calcForStartingSpellsFromSpellSchoolSkillValue(skillValue)) {
                        playerStartingSpells.push(spell);
                    }
                });
            }
        }

        return playerStartingSpells;
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