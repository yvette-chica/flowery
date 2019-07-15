import { Component } from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import { fetchVideos } from '../../modules/videoList'

import './style.styl'

const { Search } = Input

class SearchBar extends Component {
    handleSearch = searchTerm => {
        this.props.fetchVideos(searchTerm)
    }

    render() {
        return (
            <Search
                className="search-bar"
                placeholder="Search videos on Youtube"
                defaultValue={this.props.lastSearchTerm}
                onSearch={this.handleSearch}
                style={{ width: 300 }}
            />
        )
    }
}

export default connect(
    state => ({
        lastSearchTerm: state.videoList.lastSearchTerm,
    }),
    {
        fetchVideos,
    }
)(SearchBar)
