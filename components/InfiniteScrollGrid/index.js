import { Component } from 'react'

import './style.styl'

class InfiniteScrollGrid extends Component {
    render() {
        const { items } = this.props

        return (
            <div className="infinite-scroll-grid__container">
                {
                    items.map(
                        (item, index) => (
                            <div
                                className="infinite-scroll-grid__item"
                                key={index}
                            >
                                {item}
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}

// TODO: Make infinitely scrollable
export default InfiniteScrollGrid
