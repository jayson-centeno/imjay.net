import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { OneColumnContentBody } from '../../components/master-layout/OneColumnContentBody';
import { ITitleProps } from '../../common/Common';
import { Helmet } from 'react-helmet'
import { Row, Col } from 'react-bootstrap';
import cvcheck from '../../assets/images/works/cvcheck.png';
import hr360 from '../../assets/images/works/hr360.png';
import wnw from '../../assets/images/works/wnw.png';
import ipa from '../../assets/images/works/ipa.png';
import magsaysay from '../../assets/images/works/magsaysay.png';
import wp from '../../assets/images/works/workplus.png';
import infomax from '../../assets/images/works/infomax.png';
import percom from '../../assets/images/works/percom.png';
import ypp from '../../assets/images/works/ypp.png';

type WorksProps = ITitleProps & RouteComponentProps<any>;

export default class Works extends React.Component<WorksProps, {}> {
    public render() {
        return <OneColumnContentBody {...this.props} Title="My Works">
            <Helmet>
                <title>Jayson Centeno Works</title>
            </Helmet>
            <Row>
                <Col md={4} className="works margin-bottom-60">
                    <div className="hovereffect">
                        <img src={hr360} className="img-responsive" />
                        <div className="overlay">
                            <h2>HR360</h2>
                            <a className="info" target="_blank" href="https://www.hr360.com">View Site</a>
                        </div>
                    </div>
                    <div className="tag">CMS</div>
                    <div className="tag">ASP.NET</div>
                    <div className="tag">API</div>
                    <div className="tag">MVC</div>
                    <div className="tag">Web Forms</div>
                    <div className="tag">KNOCKOUTJS</div>
                    <div className="tag">JQUERY</div>
                </Col>
                <Col md={4} className="works">
                    <div className="hovereffect">
                        <img src={cvcheck} className="img-responsive" />
                        <div className="overlay">
                            <h2>CVCheck</h2>
                            <a className="info" target="_blank" href="https://www.cvcheck.com">View Site</a>
                        </div>
                    </div>
                    <div className="tag">CMS</div>
                    <div className="tag">ASP.Net</div>
                    <div className="tag">MVC</div>
                    <div className="tag">Webforms</div>
                    <div className="tag">JQUERY</div>
                    <div className="tag">Web Service</div>
                </Col>
                <Col md={4} className="works">
                    <div className="hovereffect">
                        <img src={wnw} className="img-responsive" />
                        <div className="overlay">
                            <h2>Wet n Wild</h2>
                            <a className="info" target="_blank" href="https://wetnwildsydney.com.au">View Site</a>
                        </div>
                    </div>
                    <div className="tag">CMS</div>
                    <div className="tag">ASP.Net</div>
                    <div className="tag">MVC</div>
                    <div className="tag">AngularJs</div>
                    <div className="tag">JQUERY</div>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="works margin-bottom-60">
                    <div className="hovereffect">
                        <img src={ipa} className="img-responsive" />
                        <div className="overlay">
                            <h2>Institue of Public Accountants</h2>
                            <a className="info" target="_blank" href="https://www.publicaccountants.org.au/">View Site</a>
                        </div>
                    </div>
                    <div className="tag">CMS</div>
                    <div className="tag">ASP.Net</div>
                    <div className="tag">MVC</div>
                    <div className="tag">JQUERY</div>
                </Col>
                <Col md={4} className="works">
                    <div className="hovereffect">
                        <img src={magsaysay} className="img-responsive" />
                        <div className="overlay">
                            <h2>Magsaysa Corp</h2>
                            <a className="info" target="_blank" href="https://www.magsaysaycareers.com/">View Site</a>
                        </div>
                    </div>
                    <div className="tag">ASP.Net</div>
                    <div className="tag">Webforms</div>
                    <div className="tag">JQUERY</div>
                    <div className="tag">SOA</div>
                </Col>
                <Col md={4} className="works">
                    <div className="hovereffect">
                        <img src={wp} className="img-responsive" />
                        <div className="overlay">
                            <h2>Workplus</h2>
                            <a className="info" target="_blank" href="https://workplus.dk/">View Site</a>
                        </div>
                    </div>
                    <div className="tag">ASP.Net</div>
                    <div className="tag">Webforms</div>
                    <div className="tag">MVP</div>
                    <div className="tag">JQUERY</div>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="works">
                    <div className="hovereffect">
                        <img src={infomax} className="img-responsive" />
                        <div className="overlay">
                            <h2>Infomax</h2>
                            <a className="info" target="_blank" href="https://infomax.com.ph">View Site</a>
                        </div>
                    </div>
                    <div className="tag">ASP.Net</div>
                    <div className="tag">Webfoms</div>
                    <div className="tag">VB6</div>
                </Col>
                <Col md={4} className="works">
                    <div className="hovereffect">
                        <img src={percom} className="img-responsive" />
                        <div className="overlay">
                            <h2>Percom</h2>
                            <a className="info" target="_blank" href="http://www.percom.com.ph">View Site</a>
                        </div>
                    </div>
                    <div className="tag">Service Engineer</div>
                    <div className="tag">Windows App</div>
                    <div className="tag">VB6 Scripts</div>
                </Col>
                <Col md={4} className="works">
                    <div className="hovereffect">
                        <img src={ypp} className="img-responsive" />
                        <div className="overlay">
                            <h2>Your Property Project</h2>
                            <a className="info" target="_blank" href="https://www.yourpropertyproject.com.au/">View Site</a>
                        </div>
                    </div>
                    <div className="tag">CMS</div>
                    <div className="tag">ASP.Net</div>
                    <div className="tag">MVC</div>
                    <div className="tag">JQUERY</div>
                </Col>                
            </Row>
        </OneColumnContentBody>
    }
}