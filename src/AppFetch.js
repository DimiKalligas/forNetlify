import React, { Component } from "react"

// fetch brings a esource from the network
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("https://cors-anywhere.herokuapp.com/http://dummy.restapiexample.com/api/v1/employee/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        const text = this.state.loading ? "Loading..." : this.state.character.status
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App