import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

export class Header extends React.Component<{}, {}> {
    public render() {
        return <Row>
            <Col sm={9}>
                <h3 className="logo-text">{'\{ '} JCODES<span className="blinker" />{' \}'}</h3>
            </Col>
            <Col sm={3} className="pull-right">
                <h3><a id="login">Login</a></h3>
            </Col>
        </Row>;
    }
} 