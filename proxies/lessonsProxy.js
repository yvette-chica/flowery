import axios from 'axios'

const serverApi = 'http://localhost:8000/api/'

export function createLesson(video) {
    return axios.post(`${serverApi}lesson/`, {
        title: video.snippet.title,
        description: video.snippet.description,
        videoId: video.id.videoId,
        thumbnailUrl: video.snippet.thumbnails.medium.url,
    })
}

export function getLessons() {
    return axios.get(`${serverApi}lesson/`)
}

export function deleteLesson(lessonId) {
    return axios.delete(`${serverApi}lesson/${lessonId}/`)
}
