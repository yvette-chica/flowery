import { Component } from 'react'
import { connect } from 'react-redux'
import { videoSelected } from '../../modules/videoDetail'
import Video from './Video'
import Grid from '../InfiniteScrollGrid'

class VideoList extends Component {
    render() {
        return (
            <Grid
                items={
                    this.props.videos.map((video, index) => (
                        <Video
                            key={index}
                            video={video}
                            loading={this.props.loading}
                            selectVideo={this.props.videoSelected}
                        />
                    ))
                }
            />
        )
    }
}

export default connect(state => ({
    videos: state.videoList.videos,
    loading: state.videoList.loading,
}), {
    videoSelected,
})(VideoList)
