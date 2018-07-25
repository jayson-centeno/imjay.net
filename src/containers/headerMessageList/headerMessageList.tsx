import * as React from 'react';
import { connect } from 'react-redux';
import HeaderItemMessage, { IHeaderItemMessage } from '../../components/headerMessageItem/headerMessageItem';
import { IApplicationState } from '../../store';

export interface IHeaderMessageListState {
    messages?: IHeaderItemMessage[]
}

type HeaderMessageListProps = IHeaderMessageListState;

class HeaderMessageList extends React.Component<HeaderMessageListProps, any>
{
    public renderMessages(){

        if (this.props.messages && this.props.messages.length > 0) 
        {
            return this.props.messages.map(x => {
                return <HeaderItemMessage key={x.Id} Id={x.Id} Message={x.Message} Type={x.Type} />
            })
        }
        else {
            return [];
        }

    }

    public render() {
        return (
            <div>
                {this.renderMessages()}
            </div>
        );
    }

}

export default connect(
    (state: IApplicationState) => state.headerMessages
)(HeaderMessageList);