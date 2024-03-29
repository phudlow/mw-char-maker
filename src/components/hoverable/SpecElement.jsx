import { toPresentationStr } from '../../utils'
import skills from '../../gamedata/skills';

import TooltipElement from './TooltipElement';

class SpecElement extends TooltipElement {

    // Tooltip displays the skills that belong to this specialization
    getTooltip() {
        const skillsHtml = Object.keys(skills).reduce((acc, skill) => {
            if (skills[skill].spec === this.props.name) {
                acc.push(<div key={skill}>{toPresentationStr(skill)}</div>)
            }
            return acc;
        }, []);

        return (
            <div className="tooltip specialization" hidden>
                <div className="title">{toPresentationStr(this.props.name)}</div>
                <br/>
                {skillsHtml}
            </div>
        );
    }
}

export default SpecElement;