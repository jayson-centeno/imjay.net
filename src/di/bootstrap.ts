import { Container } from 'inversify'
import "reflect-metadata";
import { AuthenticationService, IAuthenticationService } from "../services/AuthenticationService"
import { IPublicationService, PublicationService,  } from "../services/PublicationService"

const container = new Container();
container.bind<IAuthenticationService>("IAuthenticationService")
         .to(AuthenticationService);

container.bind<IPublicationService>("IPublicationService")
    .to(PublicationService);

export default container;