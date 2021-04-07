import React, { useState, useEffect } from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // in useEffect we pass in a parameter that is a function that gets executed after every render of the component
    // same as componentDidUpdate in class-based
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count]) // in array, we specify state or props that we need to watch for = CONDITIONALLY RUN EFFECTS

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => { setCount(count + 1) }} >Count: {count} times</button>
        </div>
    )
}

export default UseEffect1
