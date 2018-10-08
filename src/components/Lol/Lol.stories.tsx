import * as React from 'react';
import { action } from '@storybook/addon-actions';

import {storiesOf} from '@storybook/react';

import Component from './Lol';
// import Wrapper from '../Wrapper/Wrapper';

const stories = storiesOf('Lol', module);

stories.add('example', () => {
	return (
		<Component/>
	);
});
