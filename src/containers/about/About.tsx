import * as React from "react";
import { RouteComponentProps } from 'react-router-dom';
import { OneColumnContentBody } from '../../components/master-layout/OneColumnContentBody';
import { ITitleProps } from '../../common/Common';
import { Helmet } from 'react-helmet'
import { Col, Row } from 'react-bootstrap';

type AboutProps = ITitleProps & RouteComponentProps<any>;

export default class About extends React.Component<AboutProps, {}> {
    public render() {
        return <OneColumnContentBody {...this.props} Title="About Me">
            <Helmet>
                <title>About Jayson Centeno</title>
                <meta content="Jayson Centeno, personal website, tools, publications" name="keywords" />
            </Helmet>
            <Row className="animated fadeIn">
                <Col md={8}>
                    <p>
                        Hi I'm <b className="emphasis">Jayson</b>, a Full Stack Developer based in Manila, Philippines.
                    </p>
                    <br />
                    <p>
                        I'm currently working as a Full Stack developer at Eastvantage working with the <a className="link" href="https://www.spotbuycenter.com">Client</a> where we design and enhance the current website functionality.
                    </p>
                    <br />
                    <p>
                        Over the past decades, through full-time roles. I have created many websites, learned new things and built my character.
                    </p>
                    <br />
                    <p>
                        I have a hardwire desire to be better, an instinct for good architechtural designs and a strong ambition to make a difference on the web.
                    </p>
                    <br />
                    <p>
                        My past time is to read good books and watch seminars about personal development and businesses.
                    </p>
                    <br />
                    <p>
                        Being a married man with 2 kids, I'm able to help myself build my career and at the same time serving as a father to my family.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <h2>
                        Look me up on...
                    </h2>
                </Col>
                <Col md={8}>
                    <ul className="connected margin-top-25">
                        <li>
                            <a className="link" href="https://plus.google.com/u/0/101946906278881143505"><i className="fa fa-google-plus" /></a>
                        </li>
                        <li>
                            <a className="link" href="https://github.com/jayson-centeno"><i className="fa fa-git" /></a>
                        </li>
                        <li>
                            <a className="link" href="https://www.linkedin.com/in/jayson-centeno-54419717"><i className="fa fa-linkedin" /></a>
                        </li>
                        <li>
                            <a className="link" href="https://stackoverflow.com/users/1631816/jayson-centeno"><i className="fa fa-stack-overflow" /></a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </OneColumnContentBody>
    }
}