import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Row } from 'react-bootstrap'

export class TopNavMenu extends React.Component<{}, {}> {
    public render() {
        return <Row>
            <Navbar className="navbar navbar-default custom-nav animated fadeIn">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink exact={true} className="nav-item ripple" activeClassName='active' to="/">
                                <span className='fa fa-home' />HOME
                        </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item ripple" activeClassName='active' to="/contact">
                                SAY HELLO
                        </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item ripple" activeClassName='active' to="/works">WORKS</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item ripple" activeClassName='active' to="/tools">MY TOOLS</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item ripple" activeClassName='active' to="/publications">PUBLICATIONS</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item ripple" activeClassName='active' to="/siteinfo">SITE INFO</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-item ripple" activeClassName='active' to="/about">ABOUT</NavLink>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </Row>
    }
}