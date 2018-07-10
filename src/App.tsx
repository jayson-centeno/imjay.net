import * as React from 'react';
import { Grid } from 'react-bootstrap';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { TopNavMenu } from './components/TopNavMenu/TopNavMenu';

// import container from "../di/bootstrap"
// import { IAuthenticationService } from "../services/AuthenticationService";

export default class App extends React.Component<{}, {}> {
  public render() {
        return <Grid>
            <Header />
            <TopNavMenu />
            {this.props.children}
            <Footer />
        </Grid>;
    }
}