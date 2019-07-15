import { createAction, handleActions } from 'redux-actions'
import youtubeProxy from '../youtube'
import { videoSelected } from './videoDetail'
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

export const fetchVideos = searchTerm => (dispatch, getState) => {
    dispatch(videosSearching(searchTerm))

    const state = getState()

    youtubeProxy.get('/search', {
        params: {
            q: searchTerm,
            releventLanguage: 'de',
            part: 'snippet',
            maxResults: 9,
            key: gapiKey,
            type: 'video',
        }
    })
        .then(response => {
            const { data: { items } } = response
            dispatch(videosSearched(items))
            if (
                !state.videoDetail.selectedVideo
                    && items.length
            ) {
                dispatch(videoSelected(items[0]))
            } 
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