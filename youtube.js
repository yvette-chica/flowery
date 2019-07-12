import axios from 'axios'
import { gapiKey } from './keys'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: gapiKey,
    }
})
