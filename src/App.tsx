import * as React from 'react';
import { Grid } from 'react-bootstrap';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { TopNavMenu } from './components/topNavMenu/TopNavMenu';

export default class App extends React.Component<{}, {}> {
  public render() {
        return <div>
            <Grid>
                <Header />
                <TopNavMenu />
            </Grid>
            {this.props.children}
            <Footer />
        </div>;
    }
}