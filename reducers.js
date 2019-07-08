import { combineReducers } from 'redux'
import { actionTypes, exampleInitialState } from './store'

function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues)
}

function tick(state, action) {
    return updateObject(state, {
        lastUpdate: action.ts,
        light: !!action.light
    })
}

function increment(state, action) {
    return updateObject(state, {
        count: state.count + 1
    })
}

function decrement(state, action) {
    return updateObject(state, {
        count: state.count - 1
    })
}

function reset(state, action) {
    return updateObject(state, {
        count: exampleInitialState.count
    })
}

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

// REDUCERS
const reducers = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return tick(state, action) 
        case actionTypes.INCREMENT:
            return increment(state, action) 
        case actionTypes.DECREMENT:
            return decrement(state, action) 
        case actionTypes.RESET:
            return reset(state, action) 
        default:
            return state
    }
}
export default reducers