// a case of multiple state variables with same state transitions
import React, { useReducer } from 'react'

const initialState = 0
// action gets whatever is dispatched and sets the state accordingly
const reducer = (state, action) => { // this function is passed to the useReducer Hook
    switch (action) {
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

function ReducedCounter3() {
    //  returns the currentState as 'count', and 'dispatch' as the method
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <div>Count : {count}</div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Decrement</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </div>
            <div>
                <div>Count 2: {count2}</div>
                <button onClick={() => dispatch2('increment')}>Increment</button>
                <button onClick={() => dispatch2('decrement')}>Decrement</button>
                <button onClick={() => dispatch2('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ReducedCounter3
