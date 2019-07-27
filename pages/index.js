import { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'
import Layout from '../components/SiteLayout'
import LessonDetail from '../components/LessonDetail'
import LessonList from '../components/LessonList'


const views = {
    preview: '1',
    edit: '2',
    update: '3'
}

class Index extends Component {
    state = {
        collapsed: false,
        view: '1',
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    onMenuClick = args => {
        this.setState(state => (
            {
                ...state,
               view: args.key,
            }
        ))
    } 

    render() {
        let agendaView = null

        if (this.state.view === views.preview) {
            agendaView = (
                <LessonList />
            )
        } else if (this.state.view === views.edit) {
            agendaView = (
                <div>
                    <SearchBar />
                    <VideoList />
                </div>
            )
        } else if (this.state.view === views.update) {
            agendaView = (
                <LessonDetail />
            )
        }
        
        return (
            <Layout
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                onMenuClick={this.onMenuClick}
            >
                {agendaView}
            </Layout>
        )
    }
}

export default connect()(Index)
