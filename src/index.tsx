import "font-awesome/css/font-awesome.min.css"
import 'bootstrap/dist/css/bootstrap.css';
import './assets/index.css';
import './di/bootstrap';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DIContainer from './di/bootstrap'
import { IAuthenticationService } from './services/AuthenticationService';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import { IApplicationState } from './store';
import { ConnectedRouter } from 'connected-react-router'
import App from './App';
import { routes } from './routes';
import Config from './config';

const history = createBrowserHistory();

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = (window as any).initialReduxState as IApplicationState;
const store = configureStore(history, initialState);

function registerAuth() {

    const authenticationService = DIContainer.get<IAuthenticationService>("IAuthenticationService");
    const token = authenticationService.getAuthToken();

    if (token !== null && token !== "") {

        renderApp();

    } else {

        const request = authenticationService.getTokenFromDb({
            Email: Config.API_AUTH_USERNAME,
            Password: Config.API_AUTH_PASSWORD
        });

        request.then(response => {

            authenticationService.setAuthToken({
                TimeStamp: new Date(response.data.expiration).getTime(),
                Token: response.data.token
            });

            renderApp();

        }).catch(err => {
            throw err;
        });

    }

}

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing configuration
    // and injects the app into a DOM element.
    ReactDOM.render(
        <AppContainer>
            <Provider store={store} >
                <ConnectedRouter history={history} >
                    <App children={routes} />
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root') as HTMLElement
    );

    registerServiceWorker();
}

registerAuth()

// // Allow Hot Module Replacement
// if (module.hot) {
//     module.hot.accept('./routes', () => {
//         routes = require<typeof RoutesModule>('./routes').routes;
//         renderApp();
//     });
// }
