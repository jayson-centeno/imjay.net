import 'bootstrap/dist/css/bootstrap.css';
import './assets/index.css';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import { IApplicationState }  from './store';
import { ConnectedRouter } from 'connected-react-router'
import App from './App';
import Home from './containers/home/home';
import About from './containers/about/About';

const history = createBrowserHistory();

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as IApplicationState;
const store = configureStore(history, initialState);

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing configuration
    // and injects the app into a DOM element.
    ReactDOM.render(
        <AppContainer>
            <Provider store={store} >
                <ConnectedRouter history={ history } >
                    <App>
                        <Switch>
                            <Route exact={true} path='/' component={Home} />
                            <Route path='/about' component={About} />
                        </Switch>
                    </App>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root') as HTMLElement
    );

    registerServiceWorker();
}

renderApp();