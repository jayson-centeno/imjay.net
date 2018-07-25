import * as React from 'react'
import { ITitleProps } from '../../common/Common'
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'
import { OneColumnContentBody } from '../../components/master-layout/OneColumnContentBody';
import { Control, Form, Errors } from 'react-redux-form';
import * as ContactStore from '../../store/contact';
import * as Recaptcha from 'react-recaptcha';
import { IAuthenticationService } from "../../services/AuthenticationService"
import DIContainer from "../../di/bootstrap"
import { IApplicationState } from '../../store';
import { Col, Row, FormGroup, Button } from "react-bootstrap";

type ContactProps = ITitleProps & ContactStore.IContactState & typeof ContactStore.actionCreators & RouteComponentProps<any>;

let recaptchaInstance: Recaptcha | null;
let captChaVerified: boolean = false;

export class ContactForm extends React.Component<ContactProps, any> {

    private authenticationService: IAuthenticationService;

    public constructor(props: ContactProps) {
        super(props);
        this.authenticationService = DIContainer.get<IAuthenticationService>("IAuthenticationService");
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public componentDidMount() {
        captChaVerified = false;
    }

    public handleSubmit(contact: any) {
        
        if (this.validate()) {

            this.props.submitContact(contact.contact);

            if(recaptchaInstance !== null){
                recaptchaInstance.reset();
            }
                
        }
  
    }

    public onloadCallback() { 
        // test
    }

    public validate(): boolean {
        return captChaVerified;
    }

    public verifyCallback() {
        captChaVerified = true;
    }

    public render() {
        
        return <OneColumnContentBody {...this.props} Title="Feel free to contact me.">
            <Form model="contact" onSubmit={this.handleSubmit} >
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <label>Name</label>
                            <Control.text model=".Name" className="form-control" placeholder="Enter Your Name" required={true} />
                            <Errors
                                className="errors"
                                model=".Name"
                                show="touched"
                                messages={{
                                    valueMissing: 'Name is required'
                                }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <label>Email</label>
                            <Control type="email" model=".Email" required={true} className="form-control" placeholder="email@example.com" validateOn="blur" />
                            <Errors className="errors" model=".Email" show="touched" messages={{ valueMissing: 'Email is required', typeMismatch: 'Invalid email address' }} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <label>Message</label>
                            <Control.textarea model=".Message" className="form-control" required={true} placeholder="Enter Your Message" />
                            <Errors
                                className="errors"
                                model=".Message"
                                show="touched"
                                messages={{
                                    valueMissing: 'Message is required'
                                }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="margin-top-10 margin-bottom-10">
                        <FormGroup>
                            <Recaptcha sitekey={this.authenticationService.getCaptchaKey()}
                                ref={e => recaptchaInstance = e}
                                onloadCallback={this.onloadCallback}
                                verifyCallback={this.verifyCallback}
                                render='explicit' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Button type="submit" className="btn btn-default">Submit!</Button>
                    </Col>
                </Row>
            </Form>
        </OneColumnContentBody>

    }

}

export default connect(
    (state: IApplicationState) => state.contact, // map state to props
    ContactStore.actionCreators // map dispatch to props
)(ContactForm)