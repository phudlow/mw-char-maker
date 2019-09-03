import React, { Component } from 'react';

import races from '../../gamedata/races';
import birthsigns from '../../gamedata/birthsigns';
import skills from '../../gamedata/skills';

import SecondaryAttributes from './SecondaryAttributes';
import PrimaryAttributes from './PrimaryAttributes';
import MajorSkillsResult from './MajorSkillsResult';
import MinorSkillsResult from './MinorSkillsResult';
import MiscSkillsResult from './MiscSkillsResult';
import Specials from './Specials';

class Result extends Component {
    constructor(props) {
        super(props);

        this.getPrimaryAttributes = this.getPrimaryAttributes.bind(this);
        this.getMagickaMultiplier = this.getMagickaMultiplier.bind(this);
    }
    getPrimaryAttributes() {
        const data          = this.props.data;
        const birthsign     = this.props.data.birthsign;
        const birthsignMods = birthsigns[birthsign].primaryAttributeModifiers;
        const attributes    = Object.assign({}, races[data.race].primaryAttributes[data.sex]);

        data.favoredAttributes.forEach((favoredAttribute) => {
            attributes[favoredAttribute] += 10;
        });

        if (birthsignMods) {
            for (let attr in birthsignMods) {
                attributes[attr] += birthsignMods[attr];
            }
        }

        return attributes;
    }
    getMagickaMultiplier() {
        return 1 +
               (races[this.props.data.race].magickaMultiplier || 0 ) +
               (birthsigns[this.props.data.birthsign].magickaMultiplier || 0);
    }
    getSkillValues() {
        const skillValues  = {};
        const raceBonuses  = races[this.props.data.race].skills;
        const spec         = this.props.data.specialization;
        const gatherValues = (acc, curr) => {
            acc[curr] = skillValues[curr];
            delete skillValues[curr];
            return acc;
        };

        for (let skill in skills) {
            skillValues[skill] = skills[skill].spec === spec ? 10 : 5;
        }

        for (let skill in raceBonuses) {
            skillValues[skill] += raceBonuses[skill];
        }

        this.props.data.majorSkills.forEach(skill => skillValues[skill] += 25);
        this.props.data.minorSkills.forEach(skill => skillValues[skill] += 10);

        const majorSkills = this.props.data.majorSkills.reduce(gatherValues, {});
        const minorSkills = this.props.data.minorSkills.reduce(gatherValues, {});

        return {
            majorSkills,
            minorSkills,
            miscSkills: skillValues
        };
    }
    render() {
        const primaryAttributes = this.getPrimaryAttributes();
        const skillValues       = this.getSkillValues();

        return (
            <div id="result">
                <div>
                    <SecondaryAttributes
                        strength={primaryAttributes.strength}
                        intelligence={primaryAttributes.intelligence}
                        willpower={primaryAttributes.willpower}
                        agility={primaryAttributes.agility}
                        speed={primaryAttributes.speed}
                        endurance={primaryAttributes.endurance}
                        personality={primaryAttributes.personality}
                        luck={primaryAttributes.luck}
                        magickaMultiplier={this.getMagickaMultiplier()}
                    />
                    <br/>
                    <PrimaryAttributes
                       strength={primaryAttributes.strength}
                       intelligence={primaryAttributes.intelligence}
                       willpower={primaryAttributes.willpower}
                       agility={primaryAttributes.agility}
                       speed={primaryAttributes.speed}
                       endurance={primaryAttributes.endurance}
                       personality={primaryAttributes.personality}
                       luck={primaryAttributes.luck}
                    />
                </div>
                <div>
                    <MajorSkillsResult
                        skills={skillValues.majorSkills}
                    />
                    <br/>
                    <MinorSkillsResult
                        skills={skillValues.minorSkills}
                    />
                </div>
                <MiscSkillsResult
                    skills={skillValues.miscSkills}
                />
                <Specials
                    race={this.props.data.race}
                    birthsign={this.props.data.birthsign}
                    chosenSkills={
                        Array.prototype.concat(
                            Object.keys(skillValues.minorSkills),
                            Object.keys(skillValues.majorSkills)
                        )
                    }
                />
            </div>
        );
    }
}

export default Result;