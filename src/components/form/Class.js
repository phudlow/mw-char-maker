import React from 'react';

import SpecElement from '../hoverable/SpecElement';
import PrimaryAttributeElement from '../hoverable/PrimaryAttributeElement';
import SkillElement from '../hoverable/SkillElement';

function Class(props) {
    return (
        <div id="class-form">
            <div>
                <div className="title">Specialization</div>
                <SpecElement
                    name={props.specialization}
                    onClick={props.eventHandlers.onSpecializationClick}
                />
                <br/>
                <div className="title">Favored Attributes</div>
                <PrimaryAttributeElement
                    name={props.favoredAttributes[0]}
                    onClick={props.eventHandlers.onFavoredAttributeClick}
                    index="0"
                />
                <PrimaryAttributeElement
                    name={props.favoredAttributes[1]}
                    onClick={props.eventHandlers.onFavoredAttributeClick}
                    index="1"
                />
            </div>
            <div>
                <div className="title">Major Skills</div>
                {[0, 1, 2, 3, 4].map(index => {
                    return (
                        <SkillElement
                            name={props.majorSkills[index]}
                            onClick={props.eventHandlers.onMajorSkillClick}
                            index={index}
                            key={props.majorSkills[index]}
                        />
                    );
                })}
            </div>
            <div>
                <div className="title">Minor Skills</div>
                {[0, 1, 2, 3, 4].map(index => {
                    return (
                        <SkillElement
                            name={props.minorSkills[index]}
                            onClick={props.eventHandlers.onMinorSkillClick}
                            index={index}
                            key={props.minorSkills[index]}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Class;