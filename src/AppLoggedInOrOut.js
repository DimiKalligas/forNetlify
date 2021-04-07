import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = { isLoggedIn: false }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let buttonText = this.state.isLoggedIn ? "log out" : "log in"

        return (
            <div>
                {/* {!this.state.isLoggedIn && <h1>Is logged out</h1>} */}
                {this.state.isLoggedIn ? <h1>Is logged in</h1> : <h1>Is logged out</h1>}
                {/* <button onClick={this.handleClick}>Change state</button> */}
                <button onClick={this.handleClick}>{buttonText} </button>
            </div>
        )
    }
}

export default App