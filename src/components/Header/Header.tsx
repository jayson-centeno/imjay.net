import * as React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

export class Header extends React.Component<{}, {}> {
    public render() {
        return <Row>
            <Col sm={9}>
                <Link className="logo-link" to={'/'}><h3 className="logo-text animated fadeIn">Hi! I'm Jayson Centeno <span className="blinker" /></h3></Link>
            </Col>
            <Col sm={3} className="pull-right">
                <h3><a id="login" className="animated fadeIn">Login</a></h3>
            </Col>
        </Row>
    }
} 