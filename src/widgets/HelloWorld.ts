import { v, w } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import Button from '@dojo/widgets/button/Button';
import PirateButton from 'pirate/button/Button';

import * as css from './styles/HelloWorld.m.css';

/**
 * A themed "Hello World" widget that renders a spinning Dojo 2 logo and the text
 * "Hello, Dojo 2 World!".
 *
 * Refer to these tutorials for more help with creating a widget:
 * 	- Creating widgets, https://dojo.io/tutorials/003_creating_widgets/
 */
export class HelloWorld extends WidgetBase {
	/**
	 * Override WidgetBase#render to produce a virtual DOM tree.
	 * @returns {HNode} Each time render() executes, it should build the entire virtual DOM tree.
	 */
	protected render() {
		// Use WidgetBase#classes() to assign CSS classnames from the theme to the virtual DOM nodes.
		return v('div', { classes: css.root }, [
			v('img', { src: './img/logo.svg', classes: css.logo }),
			v('div', { classes: css.label }, [ 'Hello, Dojo 2 World!' ]),
			v('div', [
				'Normal Buttons',
				w(Button, {}, [ 'DOJO BUTTON' ]),
				w(PirateButton, {})
			]),
			v('div', [
				'Disabled Buttons',
				w(Button, { disabled: true }, [ 'DOJO BUTTON' ]),
				w(PirateButton, { disabled: true })
			])

		]);
	}
}

export default HelloWorld;
