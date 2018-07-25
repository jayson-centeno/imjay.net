import { Action, Reducer } from 'redux';
import { IAppThunkAction } from './index';
import DIContainer from '../di/bootstrap';
import { IContactService } from '../services/ContactService';
import * as HeaderMessage from '../store/headerMessage'
import { actions } from 'react-redux-form';
import { MESSAGING, ACTIONS } from '../common/Common'

export interface IContactState {
    Name: string,
    Email: string,
    Message: string,
    Verified: boolean,
    Valid: boolean
}

interface IContactFormSubmitAction {
    type: string,
};

interface IContactFormReceiveContactAction {
    type: string,
    valid: boolean
};

type KnownAction = IContactFormSubmitAction | IContactFormReceiveContactAction | HeaderMessage.IAddHeaderMessageAction;

export const actionCreators = {

    submitContact: (contact: IContactState): IAppThunkAction<any> => (dispatch) => {

        const service = DIContainer.get<IContactService>("IContactService");
        service.SubmitContact(contact)
            .then(response => {
                const data = response.data as boolean;
                
                dispatch({ type: ACTIONS.RECEIVED_CONTACT, valid: data });
                dispatch({ type: ACTIONS.ADD_HEADER_MESSAGE, message: { Message: MESSAGING.MESSAGE.CONTACT_US_SUCCESS_MESSAGE, Type:MESSAGING.TYPES.SUCCESS } });
                dispatch(actions.reset('contact'));

                setTimeout(() => {
                    dispatch({ type: ACTIONS.CLEAR_HEADER_MESSAGE });
                }, 5000);

            });

        dispatch({ type: ACTIONS.SUBMIT_CONTACT });
    }
};

export const unloadedState: IContactState = { Name: '', Email: '', Message: '', Verified: false, Valid: false }
export const reducer: Reducer<IContactState> = (state: IContactState, incomingAction: Action) => {

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case ACTIONS.SUBMIT_CONTACT:
            return {
                Email: state.Email,
                Message: state.Message,
                Name: state.Name,
                Valid: state.Valid,
                Verified: state.Verified
            };
        case ACTIONS.RECEIVED_CONTACT:
            return {
                Email: state.Email,
                Message: state.Message,
                Name: state.Name,
                Valid: state.Valid,
                Verified: state.Verified
            };

    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || unloadedState

}