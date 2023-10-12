import { Component } from 'react';

import { isDesktop, toPresentationStr } from '../../utils';

class TooltipElement extends Component {
    constructor(props) {
        super(props);

        this.onMouseMove      = this.onMouseMove.bind(this);
        this.onMouseLeave     = this.onMouseLeave.bind(this);
        this.onTouchStart     = this.onTouchStart.bind(this);
        this.getTooltip       = this.getTooltip.bind(this);
        this.getFormattedName = this.getFormattedName.bind(this);
    }

    onMouseMove(e) {
        if (!isDesktop()) return;

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
    onTouchStart(e) {
        const targetEl = e.currentTarget;

        const longTouchTimer = setTimeout(() => {
            console.log('show tooltip');
            cleanup();
        }, 500);

        const onTouchEnd = () => {
            console.log('show selector');
            cleanup();
        }

        const onTouchMove = () => {
            cleanup();
        }

        targetEl.addEventListener("touchend", onTouchEnd);
        document.addEventListener('touchmove', onTouchMove);

        function cleanup() {
            clearTimeout(longTouchTimer);
            targetEl.removeEventListener("touchend", onTouchEnd);
            document.removeEventListener('touchmove', onTouchMove);
        }
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
                onTouchStart={this.onTouchStart}
            >
                <span>{this.getFormattedName()}</span>
                <span>{this.props.value}</span>
                {this.getTooltip()}
            </div>
        )
    }
}

export default TooltipElement;