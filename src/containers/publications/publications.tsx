import * as React from "react";
import { RouteComponentProps } from 'react-router-dom';
import { OneColumnContentBody } from '../../components/master-layout/OneColumnContentBody';
import { ITitleProps } from '../../common/Common';
import { Helmet } from 'react-helmet'
import { Col, Row } from 'react-bootstrap';
import Publication from "src/components/Publication/Publication";
import * as PublicationStore from '../../store/publications';
import { IApplicationState } from "src/store";
import { connect } from "react-redux";

type PublicationsProps = PublicationStore.IPublicationsState & typeof PublicationStore.actionCreators & ITitleProps & RouteComponentProps<any>;

class Publications extends React.Component<PublicationsProps, {}> {

    public componentDidMount() {
        if (this.props.publications.length === 0) {
            this.props.fetchPublications();
        }
    }

    public render() {
        return <OneColumnContentBody {...this.props} Title="All Publications">
            <Helmet>
                <title>All Publications</title>
                <meta content="Jayson Centeno, personal website, tools, publications" name="keywords" />
            </Helmet>
            <Row className="animated fadeIn">
                <Col md={12}>
                    <div className="pub-parent">
                        <Publication isLoading={this.props.isLoading} publications={this.props.publications} />
                    </div>
                </Col>
            </Row>
        </OneColumnContentBody>
    }
}

export default connect(
    (state: IApplicationState) => state.publications,
    PublicationStore.actionCreators
)(Publications);