import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { TopNavMenu } from './components/TopNavMenu/TopNavMenu';

export default class App extends React.Component<{}, {}> {
    public render() {
        return <div>
            <Container>
                <Header />
                <TopNavMenu />
            </Container>
            {this.props.children}
            <Footer />
        </div>
    }
}