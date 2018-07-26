import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class TopNavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className="navbar navbar-default custom-nav animated fadeIn">
            <div className="container">
                <div className="navbar-headerclassName">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink exact={true} className="nav-item" activeClassName='active' to="/">
                            <span className='fa fa-home' />HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" activeClassName='active' to="/contact">SAY HELLO</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" activeClassName='active' to="/works">WORKS</NavLink>
                    </li>
                    <li>
                        <a href="#" className="nav-item">TOOLS</a>
                    </li>
                    <li>
                        <a href="#" className="nav-item">PUBLICATIONS</a>
                    </li> 
                    <li>
                        <a href="#" className="nav-item">SITE INFO</a>
                    </li>            
                    <li>
                        <NavLink className="nav-item" activeClassName='active' to="/about">ABOUT</NavLink> 
                    </li>                            
                </ul> 
            </div>
        </nav>;
    }
}