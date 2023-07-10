import {h, render} from 'preact';
import { Widget } from './widget';

const container = document.getElementById('docq-widget') as HTMLElement;
container.innerHTML = '';
render(<Widget/>, container);
