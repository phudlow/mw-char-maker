import { toPresentationStr } from '../../utils'
import primaryAttributes from '../../gamedata/primaryAttributes';

import TooltipElement from './TooltipElement';

class PrimaryAttributeElement extends TooltipElement {
    getTooltip() {
        const imgSrc = `/src/img/icons/primaryAttributes/${this.props.name}.png`;
        const description = primaryAttributes[this.props.name].description;

        return (
            <div className="tooltip primary-attribute" hidden>
                <div className="icon-header">
                    <img src={imgSrc} alt="" />
                    <div className="title">{toPresentationStr(this.props.name)}</div>
                </div>
                <div>{description}</div>
            </div>
        );
    }
}

export default PrimaryAttributeElement;