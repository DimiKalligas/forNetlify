// Check HookCounter for Hook version!
import React, { Component } from 'react'

class AppCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        // this.handleClick() = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} >Count: {this.state.count}</button>
            </div>
        )
    }
}

export default AppCount
