import axios, { AxiosPromise } from "axios";
import { inject, injectable,  } from 'inversify'
import { IAuthenticationService } from "./AuthenticationService"
import Config from '../config'

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
        return axios.get(Config.API_URL + 'publications/getpublications/', {
            headers: {
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
                'Access-Control-Allow-Origin': '*',
                "Authorization": "Bearer " + this.authenticationService.getAuthToken()
            }
        });
    }
} 