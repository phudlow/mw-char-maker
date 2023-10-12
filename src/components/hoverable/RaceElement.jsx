import { toPresentationStr, createSpecialsHtml } from '../../utils';
import races from '../../gamedata/races';

import TooltipElement from './TooltipElement';

class RaceElement extends TooltipElement {

    getTooltip() {
        const specialsHtml = createSpecialsHtml(races[this.props.name].specials)
        const raceSkills   = Object.keys(races[this.props.name].skills);
        const skillsHtml   = raceSkills.map(skill => {
            return (
                <div key={skill}>
                    <span>{toPresentationStr(skill)}</span>
                    <span>{races[this.props.name].skills[skill]}</span>
                </div>
            )
        });

        return (
            <div className="tooltip race" hidden>
                <div className="title">{toPresentationStr(this.props.name)}</div><br/>
                <div className="stats">
                    <div>
                        <div className="title">Skill Bonuses</div>
                        {skillsHtml}
                    </div>
                    <div>
                        {specialsHtml}
                    </div>
                </div>
            </div>
        );
    }
}

export default RaceElement;