import { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd';
import { fetchLessons, removeLesson } from '../../modules/lessons'
import Lesson from './Lesson'
import Grid from '../InfiniteScrollGrid'

class LessonList extends Component {
    componentDidMount() {
        this.props.fetchLessons()
    }
    render() {
        if (this.props.loading) {
            return <Icon type="loading" />
        }
        return (
            <Grid
                items={
                    this.props.lessons.map((lesson, index) => (
                        <Lesson
                            key={index}
                            lesson={lesson}
                            loading={this.props.loading}
                            removeLesson={this.props.removeLesson}
                        />
                    ))
                }
            />
        )
    }
}

export default connect(state => ({
    lessons: state.lessons.lessons,
    loading: state.lessons.loading,
}), {
    fetchLessons,
    removeLesson,
})(LessonList)
