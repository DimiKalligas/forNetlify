import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
// action gets whatever is dispatched
const reducer = (state, action) => { // this function is passed to the useReducer Hook
    // reducer reads what the action is and sets the state accordingly
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter2() {
    //  returns the currentState as 'count', and 'dispatch' as the method
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <div>Counter 1: {count.firstCounter}</div>
                <div>Counter 2: {count.secondCounter}</div>
                {/* we DISPATCH an ACTION */}
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment by 1</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement by 1</button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment by 1</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement by 1</button>

            </div>
        </div>
    )
}

export default Counter2
