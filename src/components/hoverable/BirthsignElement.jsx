import { createSpecialsHtml } from '../../utils';
import birthsigns from '../../gamedata/birthsigns';

import HoverableElement from './HoverableElement';

class BirthsignElement extends HoverableElement {
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