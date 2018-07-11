import axios, { AxiosPromise } from "axios";
import { inject, injectable,  } from 'inversify'
import { IAuthenticationService } from "./AuthenticationService"

export interface IPublicationService {
    getPublications():AxiosPromise<any>
}

@injectable()
export class PublicationService implements IPublicationService
{
    private authenticationService: IAuthenticationService;

    constructor( @inject("IAuthenticationService") authenticationService: IAuthenticationService) {
        this.authenticationService = authenticationService;
    }

    public getPublications(): AxiosPromise<any> {
        return axios.get('/api/publications/GetPublications', {
            headers: {
                "Authorization": "Bearer " + this.authenticationService.getAuthToken()
            }
        });
    }
} 