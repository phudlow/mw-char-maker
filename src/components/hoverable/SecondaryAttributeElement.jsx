import { toPresentationStr } from '../../utils'
import secondaryAttributes from '../../gamedata/secondaryAttributes';

import TooltipElement from './TooltipElement';

class SecondaryAttributeElement extends TooltipElement {
    render() {
        return (
            <div
                className="hoverable"
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
            >
                <span>{toPresentationStr(this.props.name)}</span>
                <span className={this.props.name}>{this.props.value}/{this.props.value}</span>
                {this.getTooltip()}
            </div>
        );
    }
    getTooltip() {
        const imgSrc = `/src/img/icons/secondaryAttributes/${this.props.name}.png`;
        const description = secondaryAttributes[this.props.name].description;

        return (
            <div className="tooltip secondary-attribute" hidden>
                <div className="icon-header">
                    <img src={imgSrc} alt="" />
                    <div>{description}</div>
                    <br/>
                    <div className="value">
                        {this.props.value} / {this.props.value}
                    </div>
                </div>
            </div>
        );
    }
}

export default SecondaryAttributeElement;