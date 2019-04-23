import React from 'react';

import AttributeSelect from './AttributeSelect';
import SkillsSelect from './SkillsSelect';

function Class(props) {
    return (
        <div id="class-form">
            <div>
                <label>
                    Specialization
                    <br/>
                    <select
                        defaultValue={props.specialization}
                        onChange={props.changeHandlers.specializationChange}
                    >
                        <option value="combat">Combat</option>
                        <option value="magic">Magic</option>
                        <option value="stealth">Stealth</option>
                    </select>
                </label>
                <br/><br/>
                Favored Attributes
                <br/>
                <AttributeSelect
                    value={props.favoredAttributes[0]}
                    onChange={props.changeHandlers.favoredAttributeChange}
                    index={0}
                />
                <br/>
                <AttributeSelect
                    value={props.favoredAttributes[1]}
                    onChange={props.changeHandlers.favoredAttributeChange}
                    index={1}
                />
            </div>
            <div>
                Major Skills
                <br/>
                {[0, 1, 2, 3, 4].map((num) => {
                    return (
                        <div key={num}>
                            <SkillsSelect 
                                value={props.majorSkills[num]}
                                onChange={props.changeHandlers.majorSkillChange}
                                index={num}

                            />
                            <br/>
                        </div>
                    )
                })}
            </div>
            <div>
                Minor Skills
                <br/>
                {[0, 1, 2, 3, 4].map((num) => {
                    return (
                        <div key={num}>
                            <SkillsSelect 
                                value={props.minorSkills[num]}
                                onChange={props.changeHandlers.minorSkillChange}
                                index={num}
                                key={num}
                            />
                            <br/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Class;