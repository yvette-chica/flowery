import { Component } from 'react'
import { Card, Icon } from 'antd';
import he from 'he'

const { Meta } = Card;

class Lesson extends Component {
    handleRemoveLesson = () => {
        this.props.removeLesson(this.props.lesson.id)
    }

    render() {
        const { lesson, loading } = this.props
        if (!lesson) {
            return null
        }

        if (!loading) {
        }

        return (
            <Card
                style={{ width: 400 }}
                hoverable
                loading={loading}
                actions={[
                    <Icon type="delete"
                        title="Delete Lesson"
                        onClick={this.handleRemoveLesson}
                    />,
                    <Icon type="profile"
                        title="Go to Lesson"
                    />,
                ]}
                cover={
                    loading 
                        ? null
                        : <img
                            src={lesson.thumbnailUrl}
                            alt={lesson.description}
                        />
                }
            >
                <Meta
                    title={he.decode(lesson.title)}
                    description={lesson.description}
                />
            </Card>
        )
    }
}

export default Lesson
