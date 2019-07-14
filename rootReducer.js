import { combineReducers } from 'redux'
import counterReducer from './modules/counter'
import videoReducer from './modules/videoDetail'


// REDUCERS
export default combineReducers({
    counterReducer,
    videoReducer,
})
