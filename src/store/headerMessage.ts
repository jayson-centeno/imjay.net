import { Action, Reducer } from 'redux'
import { IHeaderItemMessage } from './../components/headerMessageItem/headerMessageItem'
import { IHeaderMessageListState } from './../containers/headerMessageList/headerMessageList'
import * as shortid from 'shortid'
import * as Constants from '../common/Common'

export const actionCreators = {

    addHeaderMessage(headerMessage: IHeaderItemMessage) {
        return {
            type: Constants.ACTIONS.ADD_HEADER_MESSAGE,
            message: headerMessage
        }
    }

}

export interface IAddHeaderMessageAction {
    type: typeof Constants.ACTIONS.ADD_HEADER_MESSAGE,
    message: IHeaderItemMessage
};

type KnownAction = IAddHeaderMessageAction

export const unloadedState: IHeaderMessageListState = { messages: [] };
export const reducer: Reducer<IHeaderMessageListState> = (state: IHeaderMessageListState, incommingAction: Action) => {

    const action = incommingAction as KnownAction;

    switch (action.type) {
        case Constants.ACTIONS.ADD_HEADER_MESSAGE:
            return {
                messages:
                    [
                        {
                            Id: shortid.generate(),
                            Type: action.message.Type,
                            Message: action.message.Message
                        }]
            }
        case Constants.ACTIONS.CLEAR_HEADER_MESSAGE:
            return {
                messages: []
             }
    }

    return state || unloadedState;
} 