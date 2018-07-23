import { Action, Reducer } from 'redux'
import { IHeaderItemMessage } from './../components/headerMessageItem/headerMessageItem'
import { IHeaderMessageListState } from './../containers/headerMessageList/headerMessageList'
import * as shortid from 'shortid'

export const actionCreators = {

    addHeaderMessage(headerMessage: IHeaderItemMessage) {
        return {
            type: "ADD_HEADER_MESSAGE",
            message: headerMessage
        }
    }

}

export interface IAddHeaderMessageAction {
    type: 'ADD_HEADER_MESSAGE',
    message: IHeaderItemMessage
};

type KnownAction = IAddHeaderMessageAction

export const unloadedState: IHeaderMessageListState = { messages: [] };
export const reducer: Reducer<IHeaderMessageListState> = (state: IHeaderMessageListState, incommingAction: Action) => {

    const action = incommingAction as KnownAction;

    switch (action.type) {
        case 'ADD_HEADER_MESSAGE':
            return {
                messages:
                    [
                        {
                            Id: shortid.generate(),
                            Type: action.message.Type,
                            Message: action.message.Message
                        }]
            }
    }

    return state || unloadedState;
} 