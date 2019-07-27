import { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Meta from './Meta'

const { Header, Footer, Sider, Content } = Layout

const SiteLayout = ({ children, collapsed, onCollapse, onMenuClick, headerContent }) => {
    return (
        <Layout>
            <Meta />
            <Header>
                {headerContent}
            </Header>
            <Layout>
                <Sider
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                    collapsible
                    width={200}
                    style={{ background: '#fff' }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                        onClick={onMenuClick}
                    >
                        <Menu.Item key="1">
                            <Icon type="profile"/>
                            <span>Lessons</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="edit"/>
                            <span>Search Youtube</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="usergroup-add"/>
                            <span>Current Lesson</span>
                        </Menu.Item>
                    </Menu>
                </Sider> 
                <Content>{children}</Content>
            </Layout>
            <Footer>Flowery Languages © 2019</Footer>
        </Layout>
    )
}

export default SiteLayout 