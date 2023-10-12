import { createSpecialsHtml } from '../../utils';
import birthsigns from '../../gamedata/birthsigns';

import TooltipElement from './TooltipElement';

class BirthsignElement extends TooltipElement {
    getFormattedName() {
        return `The ${super.getFormattedName()}`;
    }
    getTooltip() {
        const specialsHtml = createSpecialsHtml(birthsigns[this.props.name].specials);
        return (
            <div className="tooltip" hidden>
                <div className="title">{this.getFormattedName()}</div>
                <br/>
                {specialsHtml}
            </div>
        );
    }
}

export default BirthsignElement;