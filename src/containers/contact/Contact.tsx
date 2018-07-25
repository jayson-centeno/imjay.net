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
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
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
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <Control type="email" model=".Email" required={true} className="form-control" placeholder="email@example.com" validateOn="blur"
                            />
                            <Errors
                                className="errors"
                                model=".Email"
                                show="touched"
                                messages={{
                                    valueMissing: 'Email is required',
                                    typeMismatch: 'Invalid email address'
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
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
    (state: IApplicationState) => state.contact, // map state to props
    ContactStore.actionCreators // map dispatch to props
)(ContactForm)