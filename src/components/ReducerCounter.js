import React, { useReducer } from 'react'

const initialState = 0
// action gets whatever is dispatched and sets the state accordingly
const reducer = (state, action) => { // this function is passed to the useReducer Hook
    switch (action) { // these are the state transitions
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducedCounter() {
    //  returns the currentState as 'count', and 'dispatch' as the method
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducedCounter
