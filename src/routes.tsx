import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import Home from './containers/home/home';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';
import { createBrowserHistory } from 'history';

// import { Index } from './containers/Index';    
// import FetchData from './containers/FetchData/FetchData';
// import Counter from './containers/Counter/Counter';

export const routes = <App>
    <Route exact path='/' component={ Home } />
</App>;

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const history = createBrowserHistory({ basename: baseUrl });

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing configuration
    // and injects the app into a DOM element.
    ReactDOM.render(
        <AppContainer>
            <Provider>
                <ConnectedRouter history={ history } children={ routes } /> 
            </Provider>
        </AppContainer>,
        document.getElementById('react-app')
    );

}

renderApp();