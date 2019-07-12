import { Component } from 'react'
import { Input } from 'antd'

const { Search } = Input

class SearchBar extends Component {
    state = {
        term: 'Default text'
    }

    handleChange = event => {
        console.log('event', event)
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = event => {
        // event.preventDefault()
        this.props.handleFormSubmit(this.state.term)
    }

    render() {
        return (
            <Search
                placeholder="input search text"
                onSearch={this.handleSubmit}
                onChange={this.handleChange}
                style={{ width: 200 }}
            />
        )
    }
}

export default SearchBar
