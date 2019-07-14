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
export const serverRenderClock = isServer => dispatch => {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
    return setInterval(() => {
        dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
    }, 1000)
}

export const incrementCount = () => dispatch => {
    return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
    return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
    return dispatch({ type: actionTypes.RESET })
}

// Reducer
export default createReducer(exampleInitialState, {
    [actionTypes.TICK]: (state, action) => ({
        ...state,
        lastUpdate: action.ts,
        light: !!action.light,
    }),
    [actionTypes.INCREMENT]: state => ({
        ...state,
        count: state.count + 1,
    }),
    [actionTypes.DECREMENT]: state => ({
        ...state,
        count: state.count - 1,
    }),
    [actionTypes.RESET]: () => ({
        ...exampleInitialState,
    }),
}) 
