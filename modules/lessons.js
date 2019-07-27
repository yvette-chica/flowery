import { createAction, handleActions } from 'redux-actions'
import { getLessons, deleteLesson } from '../proxies/lessonsProxy'

const initialState = {
    selectedLesson: null,
    lessons: [],
    loading: false,
}

// Actions
export const lessonSelected = createAction('LESSON_SELECTED')
export const lessonsFetching = createAction('LESSON_FETCHING')
export const lessonsFetched = createAction('LESSON_FETCHED')

export const selectLesson = selectedLesson => dispatch => {
    dispatch(lessonSelected(selectedLesson))
}

export const fetchLessons = () => dispatch => {
    dispatch(lessonsFetching())
    getLessons()
        .then(
            response => {
                dispatch(lessonsFetched(response.data))
            }
        )
}

export const removeLesson = lessonId => (dispatch, getState) => {
    dispatch(lessonsFetching())
    deleteLesson(lessonId)
        .then(
            response => {
                const lessons = getState().lessons.lessons
                const updatedLessons = lessons.filter(lesson => lesson.id != lessonId)
                dispatch(lessonsFetched(updatedLessons))
            }
        )
}

const reducer = handleActions({
    [lessonSelected]: (state, { payload }) => ({
        ...state,
        selectedLesson: payload,
    }),
    [lessonsFetching]: state => ({
        ...state,
        loading: true,
    }),
    [lessonsFetched]: (state, { payload }) => ({
        ...state,
        lessons: payload,
        loading: false,
    })
}, initialState) 

export default reducer