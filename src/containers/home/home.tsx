import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import { Publication } from "../publication/Publication";
import * as PublicationStore from '../../store/Publications';

import { TwoColumnContentBody } from '../../components/master-layout/TwoColumnContentBody';
type PublicationProps = PublicationStore.IPublicationsState & typeof PublicationStore.actionCreators & RouteComponentProps<{}>;

class Home extends React.Component<PublicationProps, {}> {

    public render() {
        return <div>
            <Helmet>
                <title>Jayson Centeno Personal Website</title>
            </Helmet>
            <div className="container">
                <div className="row margin-bottom-200">
                    <div className="col-sm-5">
                        <h1 className="main-title">Jayson is a Passionate Senior .Net & Front-End Developer</h1>
                    </div>
                    <div className="col-sm-7">
                        <div id="profile-pic" />
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-7">
                        <h2 className="sub-title">About</h2>
                        <hr className="divider1" />
                        <hr className="divider2" />
                        <p className="mid-text">
                            As both designer and developer of projects that require <br /> a laser focus on both, I unite form and function to <br />meet both user needs and business goals.
                        </p>
                        <p className="mid-text">
                            Currently working as a FullStack Developer.
                        </p>
                    </div>

                    <div className="col-sm-5">
                        <h2 className="sub-title">Specializing In</h2>
                        <hr className="divider1" />
                        <hr className="divider2" />
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="mid-text">
                                    .NET, ASP.NET <br />
                                    Front-End Development
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mid-text">
                                    API <br />
                                    Research
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <TwoColumnContentBody {...this.props} Title="Publications on .Net and Front end" CustomRootClass="home">
                <Publication isLoading={this.props.isLoading} publications={this.props.publications} />
            </TwoColumnContentBody>

        </div>;
    }
}

export default connect()(Home);