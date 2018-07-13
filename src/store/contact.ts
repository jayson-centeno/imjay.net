import { Action, Reducer } from 'redux';
import { IAppThunkAction } from './index';
import DIContainer from '../di/bootstrap';
import { IContactService } from '../services/ContactService';

export interface IContactState {
    Name: string,
    Email: string,
    Message: string,
    Verified: boolean,
    Valid: boolean
}

interface IContactFormSubmitAction {
    type: 'SUBMIT_CONTACT',
};

interface IContactFormReceiveContactAction {
    type: 'RECEIVED_CONTACT',
    valid: boolean
};

type KnownAction = IContactFormSubmitAction | IContactFormReceiveContactAction;

export const actionCreators = {

    submitContact: (contact: IContactState): IAppThunkAction<KnownAction> => (dispatch) => {

        const service = DIContainer.get<IContactService>("IContactService");
        service.SubmitContact(contact)
                .then(response => {
                    const data = response.data as boolean;
                    dispatch({ type: 'RECEIVED_CONTACT', valid: data });
                });

        dispatch({ type: 'SUBMIT_CONTACT' });
    }
    
};

export const unloadedState: IContactState = { Name: '', Email: '', Message: '', Verified:false, Valid:false }
export const reducer: Reducer<IContactState> = (state: IContactState, incomingAction: Action) => {

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'SUBMIT_CONTACT':
            return {
                Email: state.Email,
                Message: state.Message,
                Name: state.Name,
                Valid: state.Valid,
                Verified: state.Verified
            };
        case 'RECEIVED_CONTACT':
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