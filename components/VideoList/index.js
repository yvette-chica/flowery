import { Component } from 'react'
import { connect } from 'react-redux'
import { videoSelected } from '../../modules/videoDetail'
import Video from './Video'

class VideoList extends Component {
    handleClick = event => {
        console.log('event', event)
    }

    render() {
        return (
            <div>
                <div>The list</div>
                {
                    this.props.videos.map((video, index) => (
                        <Video
                            key={index}
                            video={video}
                            loading={this.props.loading}
                            selectVideo={this.props.videoSelected}
                        />
                    ))
                }
            </div>
        )
    }
}

export default connect(state => ({
    videos: state.videoList.videos,
    loading: state.videoList.loading,
}), {
    videoSelected
})(VideoList)
