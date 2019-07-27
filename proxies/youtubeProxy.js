import axios from 'axios'
import { gapiKey } from '../keys'

export function searchForVideos(searchTerm) {
    return axios.get('https://www.googleapis.com/youtube/v3/search/', {
        params: {
            q: searchTerm,
            releventLanguage: 'de',
            part: 'snippet',
            maxResults: 9,
            key: gapiKey,
            type: 'video',
            videoCaption: 'closedCaption',
            videoEmbeddable: 'true',
        }
    })
}
