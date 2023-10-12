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
                    onClick={props.eventHandlers.onSelectRace}
                    name={props.data.race}
                />
                {isDesktop() && <br/>}
            </div>
            <div className="form-item">
                <div className="title">Sex</div>
                <div className="sex-selector" onClick={props.eventHandlers.onToggleSex}>
                    {toPresentationStr(props.data.sex)}
                    <span>⮞</span>
                </div>
            </div >
            <div className="form-item">
                <div className="title">Specialization</div>
                <SpecElement
                    name={props.data.specialization}
                    onClick={props.eventHandlers.onSelectSpecialization}
                />
                {isDesktop() && <br/>}
            </div>
            <div className="form-item">
                <div className="title">Favored Attributes</div>
                <PrimaryAttributeElement
                    name={props.data.favoredAttributes[0]}
                    onClick={props.eventHandlers.onSelectFavoredAttribute}
                    index="0"
                />
                <PrimaryAttributeElement
                    name={props.data.favoredAttributes[1]}
                    onClick={props.eventHandlers.onSelectFavoredAttribute}
                    index="1"
                />
            </div>
            <div className="form-item">
                <div className="title">Major Skills</div>
                {[0, 1, 2, 3, 4].map(index => {
                    return (
                        <SkillElement
                            name={props.data.majorSkills[index]}
                            onClick={props.eventHandlers.onSelectMajorSkill}
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
                            onClick={props.eventHandlers.onSelectMinorSkill}
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
                    onClick={props.eventHandlers.onSelectBirthsign}
                />
            </div>
        </div>
    );
}

export default Form;