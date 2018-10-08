const path = require('path');
const fs = require('fs-promise');

const componentTSX = (name) =>
`import * as React from 'react';
import classNames from 'classnames';
import * as styles from './${name}.css';

interface State {
}

interface Props {
}

class ${name} extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
		};
	}

	render() {
		const className: string = classNames(
			styles.container,
		);

		return (
			<div className={className}>
				Hi, my name is ${name}.🔥
				I was created to make your dreams come true.
			</div>
		);
	}
}

export default ${name};
`;

const componentCSS = (name) =>
`.container {
	background: var(--color-bg);
}
`;

const componentSTORIES = (name) =>
`import * as React from 'react';

import {storiesOf} from '@storybook/react';

import Component from './${name}';

const stories = storiesOf('${name}', module);

stories.add('example', () => {
	return (
		<div>
			<Component />
		</div>
	);
});
`;


const name = process.argv[2];

if (!name) {
	console.info(`
		Generates new component scaffold in src/components folder.

		usage: node generate.js <ComponentName>
	`);
	return;
}

const generate = async (name) => {
	const folder = path.resolve('src/components', name);
	const styles = path.resolve(folder, name + '.css');
	const component = path.resolve(folder, name + '.tsx');
	const stories = path.resolve(folder, name + '.stories.tsx');

	await fs.mkdir(folder);
	await fs.writeFile(component, componentTSX(name));
	await fs.writeFile(styles, componentCSS(name));
	await fs.writeFile(stories, componentSTORIES(name));

	return name;
};

generate(name)
	.then(() => {
		console.info('Created component scaffold: ', name);
	})
	.catch((err) => {
		console.error('Exit with error:', err.message);
	});
