import * as React from 'react';
import App from './App';
import Home from './containers/home/home';
import { Route, Switch } from 'react-router'

export const routes = <App>
    <Switch>
        <Route exact={true} path='/' component={Home} />
    </Switch>
</App>;