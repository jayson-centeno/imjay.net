import * as React from "react";
import { OneColumnContentBody } from "../../../components/master-layout/OneColumnContentBody";
import { Col, Row } from "react-bootstrap";
import { ITitleProps } from '../../../common/Common'
import { RouteComponentProps, Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

type props = ITitleProps  & RouteComponentProps<any>;
export default class Tools extends React.Component<props, any> {
    
    public constructor(prop:props)
    {
        super(prop);
    }

    public render() {
        return (
        <OneColumnContentBody {...this.props} Title="My Tools">
            <Helmet>
                <title>Guid Generator</title>
                <meta content="tools, GUID Generator" name="keywords" />
            </Helmet>
            <Row>
                <Col md={8}>
                    <p>
                        A simple Guid generator that you can use during development.
                    </p>
                    <Link className="link" to="/guidcreator">Guid Generator</Link>
                </Col>
            </Row>
        </OneColumnContentBody>);
    }

}