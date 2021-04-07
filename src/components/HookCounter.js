// Hook lets you hook in to React features
// Check ClassCounter for Class-based version!
import React, { useState } from 'react'

function HookCounter() {
    // Hook accepts an argument that is the initial value of the state property
    // and returns the current value of the state, as well as a method than updates the state property
    const [count, setCount] = useState(0) // so, count is initialised to 0
    // setCount is the state Setter function

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Count {count} </button>
        </div>
    )
}

export default HookCounter
