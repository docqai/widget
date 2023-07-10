import {h, render} from 'preact';
import { Container, MessageIcon } from './components';


// const App = () => { 
//   return <div>Hello World</div>
// }

const container = document.getElementById('docq-widget') as HTMLElement;
container.innerHTML = '';
render(<MessageIcon/>, container);
