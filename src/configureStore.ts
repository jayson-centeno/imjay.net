import { History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore, GenericStoreEnhancer, ReducersMapObject, Store, StoreEnhancerStoreCreator } from 'redux';
import thunk from 'redux-thunk';
import { IApplicationState, reducers } from './store';

export default function configureStore(history: History, initialState?: IApplicationState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    // If devTools is installed, connect to it
    const devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__ as () => GenericStoreEnhancer;

    // const createStoreWithMiddleware = compose<StoreEnhancerStoreCreator<any>>(
    //     applyMiddleware(thunk, routerMiddleware(history)),
    //     devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next
    // )(createStore);

    // Combine all reducers and instantiate the app-wide store instance
    const allReducers = buildRootReducer(reducers);
    const store:Store = createStore(connectRouter(history)(allReducers), compose<StoreEnhancerStoreCreator<any>>(
        applyMiddleware(thunk, routerMiddleware(history)),
        devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next
    ));
    
    // createStoreWithMiddleware(allReducers, initialState) as Store<ApplicationState>;

    // Enable Webpack hot module replacement for reducers
    // if (module.hot) {
    //     module.hot.accept('./store', () => {
    //         const nextRootReducer = require<typeof StoreModule>('./store');
    //         store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
    //     });
    // }

    return store;
}

function buildRootReducer(allReducers: ReducersMapObject) {
    return combineReducers(Object.assign({}, allReducers));
}