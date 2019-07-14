import { Component } from 'react'
import { connect } from 'react-redux'

class VideoDetail extends Component {
    render() {
        const { selectedVideo } = this.props

        if (!selectedVideo) {
            return null
        }

        return (
            <iframe
                id="player"
                type="text/html"
                width="640"
                height="390"
                src={`http://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                frameBorder="0"
            />
        )
    }
}

export default connect(state => ({
    selectedVideo: state.videoDetail.selectedVideo,
}), {})(VideoDetail)