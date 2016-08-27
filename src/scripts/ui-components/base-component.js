import $ from 'jquery';

export class UIBaseComponent {
	constructor() {
		this.component = null;
	}

	addComponent() {
		throw 'Required: override addComponent()';
	}

	appendToComponent(comp) {
		this._createComponent();
		comp.append(this.component);
		this._enableJS();
	}

	_createComponent() {
		const comp = this.addComponent();
		this.component = $(comp);
	}

	_enableJS() {
		componentHandler.upgradeElement(this.component[0]);
	}
}

