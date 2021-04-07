import React from "react"

function handleClick() {
    console.log("You clicked me")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            <img onMouseOver={() => console.log("Mouse over image!")} src="https://www.fillmurray.com/200/100" />
            <br />
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default App