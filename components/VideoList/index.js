import { Component } from 'react'
import { connect } from 'react-redux'
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
})(VideoList)
