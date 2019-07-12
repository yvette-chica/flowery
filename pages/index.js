import { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Agenda from '../components/agenda'
import Meta from '../components/Meta'
import agenda from '../fakeData/agenda'
import Youtube from '../components/youtube'

import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../actions'
import Examples from '../components/reduxExample'

const { Header, Footer, Sider, Content } = Layout

const views = {
    preview: '1',
    edit: '2',
    update: '3'
}

class Index extends Component {
    state = {
        collapsed: false,
        view: '3',
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
                <Agenda
                    agenda={agenda}
                />
            )
        } else if (this.state.view === views.edit) {
            agendaView = (
                <Examples />
            )
        } else if (this.state.view === views.update) {
            agendaView = (
                <Youtube />
            )
        }
        
        console.log('this.state', this.state)
        return (
            <Layout>
                <Meta />
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Agenda</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        collapsible
                        width={200}
                        style={{ background: '#fff' }}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['3']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.onMenuClick}
                        >
                            <Menu.Item key="1">
                                <Icon type="profile"/>
                                <span>Preview</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="edit"/>
                                <span>Redux</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="usergroup-add"/>
                                <span>Update Roles</span>
                            </Menu.Item>
                        </Menu>
                    </Sider> 
                    <Content>
                        {agendaView}
                    </Content>
                </Layout>
                <Footer>Burning Toast © 2019</Footer>
            </Layout>
        )
    }
}

export default connect()(Index)
