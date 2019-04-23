import React, { Component } from 'react';

import SecondaryAttributes from './SecondaryAttributes';
import PrimaryAttributes from './PrimaryAttributes';
import MajorSkillsResult from './MajorSkillsResult';
import MinorSkillsResult from './MinorSkillsResult';
import MiscSkillsResult from './MiscSkillsResult';
import Specials from './Specials';

import races from '../../gamedata/races';
import birthsigns from '../../gamedata/birthsigns';
import skillDefaults from '../../gamedata/skillDefaults';

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
    getSkills() {
        const allSkills    = Object.assign({}, skillDefaults);
        const raceBonuses  = races[this.props.data.race].skills;
        const gatherValues = (acc, curr) => {
            acc[curr] = allSkills[curr];
            delete allSkills[curr];
            return acc;
        };

        for (let skill in raceBonuses) {
            allSkills[skill] += raceBonuses[skill];
        }

        this.props.data.majorSkills.forEach(skill => allSkills[skill] += 25);
        this.props.data.minorSkills.forEach(skill => allSkills[skill] += 10);

        const majorSkills = this.props.data.majorSkills.reduce(gatherValues, {});
        const minorSkills = this.props.data.minorSkills.reduce(gatherValues, {});
        
        return {
            majorSkills,
            minorSkills,
            miscSkills: allSkills
        };
    }
    render() {
        const primaryAttributes = this.getPrimaryAttributes();
        const skills            = this.getSkills();
        return (
            <div id="result">
                <div>
                    {/*Secondary Attributes*/}
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
                    {/*Primary Attributes*/}
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
                    {/*Major Skills*/}
                    <MajorSkillsResult
                        skills={skills.majorSkills}
                    />
                    {/*Minor Skills*/}
                    <MinorSkillsResult
                        skills={skills.minorSkills}
                    />
                </div>
                {/*Misc Skills*/}
                <MiscSkillsResult
                    skills={skills.miscSkills}
                />
                {/*Specials*/}
                <Specials
                    race={this.props.data.race}
                    birthsign={this.props.data.birthsign}
                    chosenSkills={
                        Array.prototype.concat(
                            Object.keys(skills.minorSkills),
                            Object.keys(skills.majorSkills)
                        )
                    }
                />
            </div>
        );
    }
}

export default Result;