import * as React from 'react';
import About from './containers/about/About';
import Home from './containers/home/home';
import { Route, Switch } from 'react-router'

export const routes = <Switch>
    <Route exact={true} path='/' component={Home} />
    <Route path='/about' component={About} />
</Switch>;