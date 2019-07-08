import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

export const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0
}

export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

export function initializeStore (initialState = exampleInitialState) {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}
