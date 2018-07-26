import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { IContentBodyExtendedProps, ContentBody } from './ContentBody'
import HeaderMessageList from '../../containers/headerMessageList/headerMessageList'
import { Col, Row } from "react-bootstrap"

type OneColumnContentBodyProps = IContentBodyExtendedProps & RouteComponentProps<any>;

export class OneColumnContentBody extends React.Component<OneColumnContentBodyProps>{
    public render() {
        return <ContentBody {...this.props} CustomRootClass="one-column">
            <Col md={12} className="margin-bottom-30">
                <h1 className="main-title publication-title animated fadeInUp">{this.props.Title}</h1>
                <Row>
                    <Col md={6}>
                        <HeaderMessageList />
                    </Col>
                </Row>
            </Col>
            <Col md={12}>
                {this.props.children}
            </Col>
        </ContentBody>
    }
}