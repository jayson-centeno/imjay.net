import { Container } from 'inversify'
import "reflect-metadata";
import { AuthenticationService, IAuthenticationService } from "../services/AuthenticationService"
import { IPublicationService, PublicationService } from "../services/PublicationService"
import { IHttpHelper, HttpHelper } from "../services/HttpHelper"
import { IContactService, ContactService } from '../services/ContactService';

const container = new Container();
container.bind<IAuthenticationService>("IAuthenticationService").to(AuthenticationService);
container.bind<IPublicationService>("IPublicationService").to(PublicationService);
container.bind<IHttpHelper>("IHttpHelper").to(HttpHelper);
container.bind<IContactService>("IContactService").to(ContactService);

export default container;