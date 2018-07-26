import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import { Publication } from "../publication/Publication";
import * as PublicationStore from '../../store/publications';
import { TwoColumnContentBody } from '../../components/master-layout/TwoColumnContentBody';
import { IApplicationState } from '../../store';
import { Grid, Row, Col } from "react-bootstrap";

type PublicationProps = PublicationStore.IPublicationsState & typeof PublicationStore.actionCreators & RouteComponentProps<{}>;

class Home extends React.Component<PublicationProps, {}> {

    public componentDidMount() {
        this.props.fetchPublications();
    }

    public render() {
        return <div>
            <Helmet>
                <title>Jayson Centeno Personal Website</title>
            </Helmet>
            <Grid>
                <Row className="margin-bottom-200">
                    <Col sm={6}>
                        <h1 className="main-title animated fadeInUp">Jayson is a Passionate Senior .Net & Front-End Developer</h1>
                    </Col>
                    <Col sm={6}>
                        <div id="profile-pic" className="animated fadeIn" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={7}>
                        <h2 className="sub-title animated fadeInUp">About</h2>
                        <hr className="divider1" />
                        <hr className="divider2" />
                        <p className="mid-text animated fadeInUp">
                            As both designer and developer of projects that require <br /> a laser focus on both, 
                            I unite form and function to <br />meet both user needs and business goals.
                        </p>
                        <p className="mid-text animated fadeInUp">
                            Currently working as a FullStack Developer.
                        </p>
                    </Col>
                    <Col sm={5}>
                        <h2 className="sub-title animated fadeInUp">Specializing In</h2>
                        <hr className="divider1" />
                        <hr className="divider2" />
                        <Row>
                            <Col sm={6}>
                                <p className="mid-text animated fadeInUp">
                                    .NET, ASP.NET <br />
                                    Front-End Development
                                </p>
                            </Col>
                            <Col sm={6}>
                                <p className="mid-text animated fadeInUp">
                                    API <br />
                                    Research
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
            
            <TwoColumnContentBody {...this.props} Title="Publications on .Net and Front end" CustomRootClass="home">
                <Publication isLoading={this.props.isLoading} publications={this.props.publications} />
            </TwoColumnContentBody>

        </div>;
    }
}

export default connect(
    (state: IApplicationState) => state.publications,
    PublicationStore.actionCreators
)(Home);