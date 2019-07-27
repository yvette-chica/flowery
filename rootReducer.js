import { combineReducers } from 'redux'
import lessons from './modules/lessons'
import videoList from './modules/videoList'


// REDUCERS
export default combineReducers({
    lessons,
    videoList,
})
