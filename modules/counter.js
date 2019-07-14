import { createAction, handleActions } from 'redux-actions'
import createReducer from '../util/createReducer'

export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

export const exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0
}

// Actions
// export const serverRenderClock = isServer => dispatch => {
//     return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
// }

export const serverRenderClock = createAction('TICK', isServer => ({ light: !isServer, ts: Date.now() }))

// export const startClock = dispatch => {
//     return setInterval(() => {
//         dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
//     }, 1000)
// }
export const startClock = createAction('TICK', () => ({ light: true, ts: Date.now() }))

// export const incrementCount = () => dispatch => {
//     return dispatch({ type: actionTypes.INCREMENT })
// }

export const incrementCount = createAction('INCREMENT')

// export const decrementCount = () => dispatch => {
//     return dispatch({ type: actionTypes.DECREMENT })
// }

export const decrementCount = createAction('DECREMENT')

// export const resetCount = () => dispatch => {
//     return dispatch({ type: actionTypes.RESET })
// }

export const resetCount = createAction('RESET')

// Reducer
export default handleActions({
    [serverRenderClock]: (state, { payload }) => ({
        ...state,
        lastUpdate: payload.ts,
        light: !!payload.light,
    }),
    [startClock]: (state, { payload }) => ({
        ...state,
        lastUpdate: payload.ts,
        light: !!payload.light,
    }),
    [incrementCount]: state => ({
        ...state,
        count: state.count + 1,
    }),
    [decrementCount]: state => ({
        ...state,
        count: state.count - 1,
    }),
    [resetCount]: () => ({
        ...exampleInitialState,
    }),
}, exampleInitialState) 
