import { createAction, handleActions } from 'redux-actions'
import { searchForVideos } from '../proxies/youtubeProxy'

const initialState = {
    videos: [],
    lastSearchTerm: '',
    pastTerms: {},
    loading: false
}

// Actions
export const videosSearching = createAction('VIDEOS_SEARCHING')
export const videosSearched = createAction('VIDEOS_SEARCHED')

export const fetchVideos = searchTerm => (dispatch, getState) => {
    dispatch(videosSearching(searchTerm))

    searchForVideos(searchTerm)
        .then(response => {
            const { data: { items } } = response
            dispatch(videosSearched(items))
        })
}

const reducer = handleActions({
    [videosSearching]: (state, { payload }) => ({
        ...state,
        lastSearchTerm: payload,
        loading: true,
    }),
    [videosSearched]: (state, { payload }) => ({
        ...state,
        loading: false,
        videos: payload,
    })
}, initialState) 

export default reducer