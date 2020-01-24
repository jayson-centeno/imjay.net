import * as React from "react";
import { OneColumnContentBody } from "../../../components/master-layout/OneColumnContentBody";
import { Button, Col, Row, FormGroup } from "react-bootstrap";
import { ITitleProps } from '../../../common/Common'
import { RouteComponentProps } from 'react-router-dom'
import { Guid } from "guid-typescript";

type props = ITitleProps & RouteComponentProps<any>;

export default class GuidCreator extends React.Component<props, any> {

    public constructor(prop: props) {
        super(prop);
        this.onClick.bind(this);
    }

    public onClick() {
        const element = document.getElementById("elNewGuid") as HTMLInputElement;
        element.value = Guid.create().toString();
    }

    public render() {
        return (<OneColumnContentBody {...this.props} Title="Guid Generator">
            <Row>
                <Col md={8}>
                    <FormGroup className="form-inline">
                        <Button type="button" className="btn btn-success margin-right-10" onClick={this.onClick} >Generate</Button>
                        <input type="text" id="elNewGuid" className="form-control" />
                    </FormGroup>
                </Col>
            </Row>
        </OneColumnContentBody>);
    }

}