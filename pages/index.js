import { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'
import Youtube from '../components/youtube'
import Layout from '../components/SiteLayout'
import { startClock, serverRenderClock } from '../modules/counter'
import VideoDetail from '../components/VideoDetail'


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

    static getInitialProps ({ reduxStore, req }) {
        const isServer = !!req
        reduxStore.dispatch(serverRenderClock(isServer))

        return {}
    }

    componentDidMount () {
        const { dispatch } = this.props
        this.timer = startClock(dispatch)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    onCollapse = collapsed => {
        console.log(collapsed);
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
                <div>
                    <SearchBar />
                    <VideoList />
                </div>
            )
        } else if (this.state.view === views.edit) {
            agendaView = (
                <VideoDetail />
            )
        } else if (this.state.view === views.update) {
            agendaView = (
                <Youtube />
            )
        }
        
        console.log('this.state', this.state)
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
