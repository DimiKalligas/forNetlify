import React, { useState } from 'react'
import '../Hook.css'

function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <main>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            {/* NOT SAFE */}
            {/*  <button onClick={() => setCount(count + 1)}>Increment</button> */}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </main>
    )
}

export default HookCounter2
