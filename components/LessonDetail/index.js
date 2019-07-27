import { Component } from 'react'
import { connect } from 'react-redux'

class LessonDetail extends Component {
    render() {
        return (
            <iframe
                id="player"
                type="text/html"
                width="640"
                height="390"
                // src={`http://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                frameBorder="0"
            />
        )
    }
}

export default connect(state => ({
}), {})(LessonDetail)