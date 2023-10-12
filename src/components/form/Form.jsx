import RaceElement from "../hoverable/RaceElement";
import SpecElement from "../hoverable/SpecElement";
import PrimaryAttributeElement from "../hoverable/PrimaryAttributeElement";
import SkillElement from "../hoverable/SkillElement";
import BirthsignElement from "../hoverable/BirthsignElement";

import { toPresentationStr, isDesktop } from "../../utils";

function Form(props) {

    return (
        <div id="form" className={isDesktop() ? 'desktop' : 'mobile'}>
            <div className="form-item">
                <div className="title">Race</div>
                <RaceElement
                    onClick={props.eventHandlers.onRaceClick}
                    name={props.data.race}
                />
                {isDesktop() && <br/>}
            </div>
            <div className="form-item">
                <div className="title">Sex</div>
                <div className="sex-selector" onClick={props.eventHandlers.onSexClick}>
                    {toPresentationStr(props.data.sex)}
                    <span>⮞</span>
                </div>
            </div >
            <div className="form-item">
                <div className="title">Specialization</div>
                <SpecElement
                    name={props.data.specialization}
                    onClick={props.eventHandlers.onSpecializationClick}
                />
                {isDesktop() && <br/>}
            </div>
            <div className="form-item">
                <div className="title">Favored Attributes</div>
                <PrimaryAttributeElement
                    name={props.data.favoredAttributes[0]}
                    onClick={props.eventHandlers.onFavoredAttributeClick}
                    index="0"
                />
                <PrimaryAttributeElement
                    name={props.data.favoredAttributes[1]}
                    onClick={props.eventHandlers.onFavoredAttributeClick}
                    index="1"
                />
            </div>
            <div className="form-item">
                <div className="title">Major Skills</div>
                {[0, 1, 2, 3, 4].map(index => {
                    return (
                        <SkillElement
                            name={props.data.majorSkills[index]}
                            onClick={props.eventHandlers.onMajorSkillClick}
                            index={index}
                            key={props.data.majorSkills[index]}
                        />
                    );
                })}
            </div>
            <div className="form-item">
                <div className="title">Minor Skills</div>
                {[0, 1, 2, 3, 4].map(index => {
                    return (
                        <SkillElement
                            name={props.data.minorSkills[index]}
                            onClick={props.eventHandlers.onMinorSkillClick}
                            index={index}
                            key={props.data.minorSkills[index]}
                        />
                    );
                })}
            </div>
            <div className="form-item">
                <div className="title">Birthsign</div>
                <BirthsignElement
                    name={props.data.birthsign}
                    onClick={props.eventHandlers.onBirthsignClick}
                />
            </div>
        </div>
    );
}

export default Form;