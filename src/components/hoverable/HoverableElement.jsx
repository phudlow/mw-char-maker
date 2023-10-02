import { Component } from 'react';

import { toPresentationStr } from '../../utils'

class HoverableElement extends Component {
    constructor(props) {
        super(props);

        this.onMouseMove      = this.onMouseMove.bind(this);
        this.onMouseLeave     = this.onMouseLeave.bind(this);
        this.getTooltip       = this.getTooltip.bind(this);
        this.getFormattedName = this.getFormattedName.bind(this);
    }

    onMouseMove(e) {
        const tip      = e.target.closest('.hoverable').querySelector('.tooltip');
        const forFixed = !!e.target.closest('.selector-container');

        document.querySelectorAll('.tooltip').forEach(tip => tip.hidden = true);

        if (tip) {
            tip.removeAttribute('hidden');
            tip.style.left = `${e.clientX + 25}px`;
            tip.style.top  = `${e.clientY + (forFixed ? 0 : window.scrollY)}px`;
        }
    }
    onMouseLeave() {
        document.querySelectorAll('.tooltip').forEach(tip => tip.hidden = true)
    }
    getTooltip() {
        return <div className="tooltip" hidden>{toPresentationStr(this.props.name)}</div>;
    }
    getFormattedName() {
        return toPresentationStr(this.props.name);
    }

    render() {
        return (
            <div
                className="hoverable"
                name={this.props.name}
                index={this.props.index}
                onMouseMove={this.onMouseMove}
                onMouseLeave={this.onMouseLeave}
                onClick={this.props.onClick}
            >
                <span>{this.getFormattedName()}</span>
                <span>{this.props.value}</span>
                {this.getTooltip()}
            </div>
        )
    }
}

export default HoverableElement;