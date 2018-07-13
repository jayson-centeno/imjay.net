import * as React from 'react'
import { ITitleProps } from '../../common/Common'
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom'
import { OneColumnContentBody } from '../../components/master-layout/OneColumnContentBody';
import { Control, Form } from 'react-redux-form';
import * as ContactStore from '../../store/contact';
import * as Recaptcha from 'react-recaptcha';
import { IAuthenticationService } from "../../services/AuthenticationService"
import DIContainer from "../../di/bootstrap"
import { IApplicationState } from '../../store';

type ContactProps = ITitleProps & ContactStore.IContactState & typeof ContactStore.actionCreators & RouteComponentProps<any>;

let recaptchaInstance;
let captChaVerified: boolean = false;

export class ContactForm extends React.Component<ContactProps, any> {

    private authenticationService: IAuthenticationService;

    public constructor(props: ContactProps) {
        super(props);
        this.authenticationService = DIContainer.get<IAuthenticationService>("IAuthenticationService");
    }

    public componentDidMount() {
        captChaVerified = false;
    }

    public handleSubmit(contact: any) {
        
        if (this.valide()) {
            contact.contact.verified = true;
            this.props.submitContact(contact.contact);
        }
        else {
            //NotificationSystem.; // .error('Invalid Captcha!', '', 2000);
        }

    }

    public onloadCallback() { }

    public valide() {
        return captChaVerified;
    }

    public verifyCallback() {
        captChaVerified = true;
    }

    public render() {

        return <OneColumnContentBody {...this.props} Title="Feel free to contact me.">
            <Form model="contact" className="margin-top-30" onSubmit={(contact) => this.handleSubmit(contact)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Name</label>
                            <Control.text model=".Name" className="form-control" placeholder="Enter Your Name" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <Control.text model=".Email" className="form-control" placeholder="Enter Your Email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Message</label>
                            <Control.textarea model=".Message" className="form-control" placeholder="Enter Your Message" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 margin-top-10 margin-bottom-10">
                        <div className="form-group">
                            <Recaptcha sitekey={this.authenticationService.getCaptchaKey()}
                                ref={e => recaptchaInstance = e}
                                onloadCallback={this.onloadCallback}
                                verifyCallback={this.verifyCallback}
                                render='explicit' />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-default">Submit!</button>
                    </div>
                </div>
            </Form>
        </OneColumnContentBody>

    }

}

export default connect(
    (state: IApplicationState) => state.contact,
    ContactStore.actionCreators
)(ContactForm)