import React from 'react';
// import logo from './logo.svg';
import ToDoItem from './components/toDoItem'
import todosData from './components/todosData'
import './style.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = { todos: todosData }

        this.handleChange = this.handleChange.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
    }

    getSnapshotBeforeUpdate() {
        // create a backup of current state
    }

    componentDidMount() {
        // GET the data I need to correctly display
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.whatever !== this.props.whatever) {
        //     // do sth only if props are different this time
        // }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if we want to update
        // return false if not
    }

    componentWillMount() {
        // cleanup your code before your component disappears
        // e.g. remove any event listener
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        // console.log(React.version);
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)

        return (
            <div className="todo-list" >
                {todoItems}
            </div>
        );
    }
}

export default App;
