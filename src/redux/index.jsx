import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './reducer/authReducer'
import cartReducer from './reducer/cartReducer';
import productReducer from './reducer/productReducer'
import userReducer from './reducer/userReducer';
import viewReducer from './reducer/viewReducer';
import searchReducer from './reducer/searchReducer';
import createSagaMiddleware from "redux-saga";
import mySaga from './saga'

let reducer = combineReducers({

    authReducer: authReducer,
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
    view: viewReducer,
    search: searchReducer,
})
const sagaMiddleware = createSagaMiddleware();
const middleware = stores => next => action => {
    if (typeof action === 'function') {
        return action(stores.dispatch)
    } else {
        next(action)
    }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancer(applyMiddleware(middleware, sagaMiddleware)))

sagaMiddleware.run(mySaga);
export default store