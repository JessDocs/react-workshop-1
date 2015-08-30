import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import apiMiddleware from 'config.apiMiddleware'
import * as reducers from 'redux.reducers'

const reducer = combineReducers(reducers)

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
    // apiMiddleware
)(createStore)

/**
 * Creates a preconfigured store.
 */
export default function configureStore (initialState) {
    return createStoreWithMiddleware(reducer, initialState)
}

