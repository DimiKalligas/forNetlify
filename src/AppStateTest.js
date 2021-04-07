import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = { count: 1 }

        this.myDouble = this.myDouble.bind(this)
        this.myHalf = this.myHalf.bind(this)
    }

    myDouble() {
        this.setState(prevState => {
            return {
                count: prevState.count * 2
            }
        })
    }
    myHalf() {
        this.setState(prevState => {
            return {
                count: prevState.count / 2
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.myDouble}>Double it!</button>
                <br />
                <button onClick={this.myHalf}>Half it!</button>
            </div >
        )
    }
}

export default App