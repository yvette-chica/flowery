import { combineReducers } from 'redux'
import videoDetail from './modules/videoDetail'
import videoList from './modules/videoList'


// REDUCERS
export default combineReducers({
    videoDetail,
    videoList,
})
