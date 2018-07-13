import * as Publication from './publications';
import * as Contact from './contact';
import * as ContactForm from '../store/contact'
import { combineForms } from 'react-redux-form';

// The top-level state object
export interface IApplicationState {
    publications: Publication.IPublicationsState;
    contact: Contact.IContactState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    contacReducer: ContactForm.reducer,
    contact: combineForms({ contact: ContactForm.unloadedState }),
    publications: Publication.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export type IAppThunkAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;