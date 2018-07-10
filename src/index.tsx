import 'bootstrap/dist/css/bootstrap.css';
// import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import * as RouterModules from './routes';
import registerServiceWorker from './registerServiceWorker';

let Routes = RouterModules.routes;
ReactDOM.render(
  <Routes />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();