import { Component } from 'react'
import { Card } from 'antd';
import he from 'he'

const { Meta } = Card;

class Video extends Component {
    handleClick = () => {
        this.props.selectVideo(this.props.video)
    }

    render() {
        const { video, loading } = this.props
        if (!video) {
            return null
        }

        return (
            <Card
                style={{ width: 400 }}
                hoverable
                loading={loading}
                onClick={this.handleClick}
                cover={
                    loading
                        ? null
                        : <img
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.description}
                        />
                }
            >
                <Meta
                    title={he.decode(video.snippet.title)}
                    description={video.snippet.description}
                />
            </Card>
        )
    }
}

export default Video
