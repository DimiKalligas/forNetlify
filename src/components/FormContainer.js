import React, { Component } from "react"
import FormComponent from './FormComponent'


class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            isFriendly: true,
            gender: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false,
            favColor: ""
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        // this is important to avoid errors that may be hard to debug
        const { name, value, type, checked } = event.target
        type === "checkbox"
            ? this.setState({
                [name]: checked
            })
            : this.setState({
                [name]: value // look at comments
            })
        // target represents the element in which the event was fired
        // firstName: event.target.value // =
        // string inside an object needs to be in square brackets
        // [event.target.name]: event.target.value
    }

    // handleSubmit(event) {
    //     alert('you entered data')
    // }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            // or, we could pass down all the properties, like this ->
            // {...this.state}
            // 
            />
        )
    }
}

export default Form