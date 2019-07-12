import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../../youtube'
import { gapiKey } from '../../keys'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'


class Youtube extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    handleSubmit = async termFromSearchBar => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar,
                part: 'snippet',
                maxResults: 5,
                key: gapiKey,
                relevanceLanguage: 'fr',
            }
        })

        this.setState({
            videos: response.data.items
        })
    }

    handleVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        const { selectedVideo } = this.state
        return (
            <div>
                <SearchBar handleFormSubmit={this.handleSubmit} />
                {/* <VideoDetail video={this.state.selectedVideo} /> */}
                {
                    selectedVideo
                        ? <iframe
                            id="player"
                            type="text/html"
                            width="640"
                            height="390"
                            src={`http://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                            frameborder="0"
                        />
                        : null
                }

                <VideoList
                    handleVideoSelect={this.handleVideoSelect}
                    videos={this.state.videos}
                />
            </div>
        )
    }
}

export default Youtube
