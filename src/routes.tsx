import * as React from 'react';
import About from './containers/about/About';
import Home from './containers/home/home';
import ContactForm from './containers/contact/Contact';
import Works from './containers/works/works';
import Tools from './containers/tools/tools/tools';
import Publications from './containers/publications/publications';
import SiteInfo from './containers/siteInfo/siteInfo';
import GuidCreator from './containers/tools/guidcreator/guidcreator';
import { Switch, Route } from "react-router-dom";

export const routes = <Switch>
    <Route exact={true} path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={ContactForm} />
    <Route path='/works' component={Works} />
    <Route path='/tools' component={Tools} />
    <Route path='/publications' component={Publications} />
    <Route path='/siteinfo' component={SiteInfo} />
    <Route path='/guidcreator' component={GuidCreator} />
</Switch>