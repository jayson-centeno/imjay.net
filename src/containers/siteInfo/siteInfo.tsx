import * as React from "react";
import { RouteComponentProps } from 'react-router-dom';
import { OneColumnContentBody } from '../../components/master-layout/OneColumnContentBody';
import { ITitleProps } from '../../common/Common';
import { Helmet } from 'react-helmet'
import { Col, Row } from 'react-bootstrap';

type SiteInfoProps = ITitleProps & RouteComponentProps<any>;

export default class SiteInfo extends React.Component<SiteInfoProps, {}> {
    public render() {
        return <OneColumnContentBody {...this.props} Title="Site Information">
            <Helmet>
                <title>Site Information</title>
                <meta content="Jayson Centeno, personal website, tools, publications" name="keywords" />
            </Helmet>
            <Row className="animated fadeIn">
                <Col md={8}>
                    <p>
                        This website is powered by .Net Core, Web API, NodeJs, Typescript, Reactjs, Sql Server and JWT Authentication
                    </p>
                </Col>
            </Row>
        </OneColumnContentBody>
    }
}