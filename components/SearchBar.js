import { Component } from 'react'
import { Input } from 'antd'
import { connect } from 'react-redux'
import { fetchVideos } from '../modules/videoList'

const { Search } = Input

class SearchBar extends Component {
    handleSearch = searchTerm => {
        this.props.fetchVideos(searchTerm)
    }

    render() {
        return (
            <Search
                placeholder="input search text"
                defaultValue={this.props.lastSearchTerm}
                onSearch={this.handleSearch}
                style={{ width: 200 }}
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
