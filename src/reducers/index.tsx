import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './AppReducer';
import authReducer from './AuthReducer';


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch;
