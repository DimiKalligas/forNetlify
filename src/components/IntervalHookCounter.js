import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        // h vazoume setCount(count + 1) kai to count sto dependency array, h prevState => { return prevState + 1 }
        setCount(count + 1)  // h prevState => { return prevState + 1 } kai keno dependency array

    }

    useEffect(() => {
        const interval = setInterval(tick, 1000) // NO tick() ???

        // set componentWillUnmount
        return () => {
            clearInterval(interval)
        }
    }, [count]) // set interval only once - DEPENDENCY ARRAY is empty

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
