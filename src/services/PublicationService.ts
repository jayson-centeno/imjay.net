import { AxiosPromise } from "axios";
import { inject, injectable,  } from 'inversify'
import { IAuthenticationService } from "./AuthenticationService"
import Config from '../config';
import { IHttpHelper } from './HttpHelper';

export interface IPublicationService {
    getPublications():AxiosPromise<any>
}

@injectable()
export class PublicationService implements IPublicationService
{
    private authenticationService: IAuthenticationService;
    private httpHelper: IHttpHelper;

    constructor( @inject("IAuthenticationService") authenticationService: IAuthenticationService, @inject("IHttpHelper") httpHelper:IHttpHelper) {
        this.authenticationService = authenticationService;
        this.httpHelper = httpHelper;
    }

    public getPublications(): AxiosPromise<any> {
        return this.httpHelper.Get(Config.API_URL + 'publications/getpublications/', {
            headers: {
                "Authorization": "Bearer " + this.authenticationService.getAuthToken()
            }
        });
    }
}