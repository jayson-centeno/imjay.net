import * as React from 'react'
import classnames from 'classnames'

export interface IHeaderItemMessage {
    Id?: string | '',
    Type: string,
    Message:string | ''
}

type HeaderItemMessageProps = IHeaderItemMessage;

export default class HeaderItemMessage extends React.Component<HeaderItemMessageProps, any> {

    public render(){
        return (
        <div className={classnames('alert', {
            'alert-success': this.props.Type === 'success',
            'alert-danger' : this.props.Type === 'error'
            })}>
            {this.props.Message}
        </div>
        );
    }

}