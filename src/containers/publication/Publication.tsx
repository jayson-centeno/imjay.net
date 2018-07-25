import * as React from 'react';
import * as PublicationStore from '../../store/publications';
import { Col } from "react-bootstrap";

type PublicationProps = PublicationStore.IPublicationsState;
 
export class Publication extends React.Component<PublicationProps, {}> {

    public renderPublications = (publications?: PublicationStore.IPublication[]) =>  {
        if (publications && publications.length > 0) 
        {
            return publications.map((item, index) => (
                <li key={item.id}>
                    <a className="link link-strong">{item.title}</a>
                    <p>
                        {item.description}
                    </p>
                </li>
            ));
        }
        else {
            return [];
        }
    }
     
    public render() {
        return <div className={this.props.isLoading ? "row hidden" : "row"}>
            <Col md={12}>
                <ul className="pub-parent">
                    {this.renderPublications(this.props.publications)}
                </ul>
            </Col>
        </div>
    }
}