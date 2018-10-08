import { configure } from '@storybook/react';
import {loadStories} from './src/load';

configure(loadStories, module);