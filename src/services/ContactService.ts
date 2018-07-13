import axios, { AxiosPromise } from 'axios';
import { injectable, inject } from 'inversify'
import { IAuthenticationService } from "./AuthenticationService"
import { IContactState } from '../store/Contact'

export interface IContactService {
    SubmitContact(contact: IContactState) : AxiosPromise<any>;
}

@injectable()
export class ContactService implements IContactService {

    private authenticationService: IAuthenticationService;

    constructor(@inject("IAuthenticationService") authenticationService: IAuthenticationService) {
        this.authenticationService = authenticationService;
    }

    public SubmitContact(contact: IContactState) : AxiosPromise<any> {
        
        const contactPost = {
            email : contact.Email,
            message : contact.Message,
            name : contact.Name,
            verified : contact.Verified
        };

        return axios.post('/api/contact/',
            contactPost,
            {
                headers: {
                    "Authorization": "Bearer " + this.authenticationService.getAuthToken()
            }
        });

    }

}