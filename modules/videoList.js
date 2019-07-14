import { createAction, handleActions } from 'redux-actions'
import youtubeProxy from '../youtube'
import { gapiKey } from '../keys'

const initialState = {
    videos: [],
    lastSearchTerm: '',
    pastTerms: {},
    loading: false
}

// Actions
export const videosSearching = createAction('VIDEOS_SEARCHING')
export const videosSearched = createAction('VIDEOS_SEARCHED')

export const fetchVideos = searchTerm => dispatch => {
    dispatch(videosSearching(searchTerm))

    youtubeProxy.get('/search', {
        params: {
            q: searchTerm,
            releventLanguage: 'de',
            part: 'snippet',
            maxResults: 5,
            key: gapiKey,
            type: 'video',
        }
    })
        .then(response => {
            dispatch(videosSearched(response.data.items))
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