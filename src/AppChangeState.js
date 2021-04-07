import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // setState comes from React.Component, so needs to be bound to class 'App'
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                {/* send prop 'count' to child component */}
                {/* <ChildComponent count={this.state.count} /> */}
            </div>
        )
    }
}

export default App