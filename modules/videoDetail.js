import { createAction, handleActions } from 'redux-actions'

const initialState = {
    selectedVideo: null,
    vocabulary: [],
}

// Actions
export const videoSelected = createAction('VIDEO_SELECTED')


const reducer = handleActions({
    [videoSelected]: (state, { payload }) => ({
        ...state,
        selectedVideo: payload,
    })
}, initialState) 

export default reducer