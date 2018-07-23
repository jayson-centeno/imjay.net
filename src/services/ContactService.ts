import { AxiosPromise } from 'axios';
import { injectable, inject } from 'inversify'
import { IAuthenticationService } from "./AuthenticationService";
import { IContactState } from '../store/Contact';
import { IHttpHelper } from './HttpHelper';
import Config from '../config';

export interface IContactService {
    SubmitContact(contact: IContactState) : AxiosPromise<any>;
}

@injectable()
export class ContactService implements IContactService {

    private authenticationService: IAuthenticationService;
    private httpHelper : IHttpHelper;

    constructor(@inject("IAuthenticationService") authenticationService: IAuthenticationService,
                @inject("IHttpHelper") httpHelper: IHttpHelper) {

        this.authenticationService = authenticationService;
        this.httpHelper = httpHelper;

    }

    public SubmitContact(contact: IContactState) : AxiosPromise<any> {
        
        const contactPost = {
            email : contact.Email,
            message : contact.Message,
            name : contact.Name,
            verified : contact.Verified
        };

        return this.httpHelper.Post(Config.API_URL + "contact/", contactPost, this.authenticationService.getAuthHeader())

        // return axios.post('/api/contact/',
        //     contactPost,
        //     {
        //         headers: {
        //             "Authorization": "Bearer " + this.authenticationService.getAuthToken()
        //     }
        // });

    }

}