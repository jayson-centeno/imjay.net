import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { IContentBodyExtendedProps, ContentBody } from './ContentBody'

type TwoColumnContentBodyProps = IContentBodyExtendedProps & RouteComponentProps<any>;

export class TwoColumnContentBody extends React.Component<TwoColumnContentBodyProps>{
    public render() {
        return <ContentBody {...this.props}>
            <div className="col-md-7">
                <h1 className="main-title publication-title animated fadeInUp">{this.props.Title}</h1>
            </div>
            <div className="col-md-5">
                {this.props.children}
            </div>
        </ContentBody>
    }
}