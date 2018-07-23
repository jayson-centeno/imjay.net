﻿import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { IContentBodyExtendedProps, ContentBody } from './ContentBody'
import HeaderMessageList from '../../containers/headerMessageList/headerMessageList'

type OneColumnContentBodyProps = IContentBodyExtendedProps & RouteComponentProps<any>;

export class OneColumnContentBody extends React.Component<OneColumnContentBodyProps>{
    public render() {
        return <ContentBody {...this.props} CustomRootClass="one-column">
            <div className="col-md-12 margin-bottom-50">
                <h1 className="main-title publication-title">{this.props.Title}</h1>
                <HeaderMessageList />
            </div>
            <div className="col-md-12">
                {this.props.children}
            </div>
        </ContentBody>
    }
}