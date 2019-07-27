import { Component } from 'react'
import { Card, Icon } from 'antd';
import he from 'he'
import { createLesson } from '../../proxies/lessonsProxy'

const { Meta } = Card;

class Video extends Component {
    state = { previewing: false }

    handleAddLesson = () => {
        createLesson(this.props.video)
    }

    handlePreview = () => {
        this.setState({ previewing: true })
    }

    render() {
        const { video, loading } = this.props
        if (!video) {
            return null
        }

        let coverComponent = null
        
        if (!loading) {
            if (!this.state.previewing) {
                coverComponent = (
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.description}
                    /> 
                )
            } else {
                coverComponent = (
                    <iframe
                        id="player"
                        type="text/html"
                        width="640"
                        height="390"
                        src={`http://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder="0"
                    />
                )
            }
        }

        return (
            <Card
                style={{ width: 400 }}
                hoverable
                loading={loading}
                actions={[
                    <Icon type="play-circle"
                        onClick={this.handlePreview}
                        title="Preview Video"
                    />,
                    <Icon type="plus-circle"
                        onClick={this.handleAddLesson}
                        title="Add Lesson"
                    />,
                ]}
                cover={coverComponent}
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
