// see: https://www.robinwieruch.de/react-usereducer-vs-usestate
import React, { useReducer, useState } from 'react'

// const initialState = {
//     firstCounter: 0
// }

// action gets whatever is dispatched
function reducer(state, action) { // this function is passed to the useReducer Hook
    // reducer reads what the action is and sets the state accordingly
    switch (action.type) {
        case 'add-todo':
            // return { firstCounter: state.firstCounter + action.value }
            return { todos: [...state.todos, { text: action.text, completed: false }] }
        case 'toggle-todo':
            // return { firstCounter: state.firstCounter - action.value }
            return {
                todos: state.todos.map((t, idx) => idx === action.idx ? { ...t, completed: !t.completed } : t)
            }
        // case 'reset':
        //     return initialState
        default:
            return state
    }
}

function Counter2() {
    //  returns the currentState as 'todos', and 'dispatch' as the method
    const [{ todos }, dispatch] = useReducer(reducer, { todos: [] })
    const [text, setText] = useState()

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch({ type: "add-todo", text }) // or commonly: payload: text
                setText("")
            }}>
                <input value={text} onChange={e => setText(e.target.value)} />
            </form>
            <pre>
                {/* {JSON.stringify(todos, null, 2)} */}
                {/* or, in a list */}
                {todos.map((t, idx) => (
                    <div
                        key={t.text} onClick={() => dispatch({ type: 'toggle-todo', idx })}
                        style={{ textDecoration: t.completed ? "line-through" : "" }}
                    >{t.text}</div>
                ))}
            </pre>
        </div>
    )
}

export default Counter2
