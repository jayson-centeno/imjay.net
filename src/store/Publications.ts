import { Reducer } from 'redux';
import { IAppThunkAction } from './';
import { addTask } from 'domain-task';
import { IPublicationService } from "../services/PublicationService";
import container from "../di/bootstrap"

export interface IPublicationsState {
    isLoading: boolean
    publications: IPublication[]
}

export interface IPublication {
    id: number
    title: string
    description:string
}

interface IRequestPlublicationAction {
    type: 'FetchPublications',
};

interface IReceivePlublicationAction {
    type: 'ReceivePublications',
    publications: IPublication[]
};

type KnownAction = IRequestPlublicationAction | IReceivePlublicationAction;

export const actionCreators = {

    fetchPublications: () : IAppThunkAction<KnownAction> => (dispatch) => {

        const service = container.get<IPublicationService>("IPublicationService");
        const fetchTask = service.getPublications()
            .then(response => {

                const data = response.data as IPublication[];
                dispatch({ type: 'ReceivePublications', publications: data }); 

            });

        addTask(fetchTask);
        dispatch({ type: 'FetchPublications' });

    }

}

const unloadedState: IPublicationsState = { isLoading: false, publications: [] }
export const reducer: Reducer<IPublicationsState> = (state: IPublicationsState, incomingAction: KnownAction) =>
{
    switch (incomingAction.type) {
        case 'FetchPublications':
            return {
                isLoading: true,
                publications: state.publications
            }
        case 'ReceivePublications': {
            return {
                isLoading: false,
                publications: incomingAction.publications
            }
        }
    }

    return state || unloadedState;
}