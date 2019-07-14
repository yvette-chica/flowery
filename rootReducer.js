import { combineReducers } from 'redux'
import counterReducer from './modules/counter'
import videoDetail from './modules/videoDetail'
import videoList from './modules/videoList'


// REDUCERS
export default combineReducers({
    counterReducer,
    videoDetail,
    videoList,
})
