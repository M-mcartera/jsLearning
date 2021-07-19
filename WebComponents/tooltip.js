class Tooltip extends HTMLElement {
    constructor(){
        super();
        this._toolTipContainer;

    }

    connectedCallback(){
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
        tooltipIcon.addEventListener('mouseenter', this._showToolTip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideToolTip.bind(this));
        this.appendChild(tooltipIcon);
    }
    _showToolTip(){
        this._toolTipContainer = document.createElement('div');
        this._toolTipContainer.textContent = "this is tooltip container";
        this.appendChild(this._toolTipContainer);
    }
    _hideToolTip(){
        this.removeChild(this._toolTipContainer);
    }
}

customElements.define('my-tooltip', Tooltip);