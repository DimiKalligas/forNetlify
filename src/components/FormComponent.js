// από τη στιγμή που έγινε ξεχωριστό αρχείο, αλλάξαμε το this.handleChange σε props.handleChange
// και το props.data σε props.data
import React from 'react'

function FormComponent(props) {
    return (
        // USE FORMIK library for React forms!
        <form >
            <input type="text" value={props.data.firstName} name="firstName" placeholder="your name" onChange={props.handleChange} />
            <br />
            <input type="text" value={props.data.lastName} name="lastName" placeholder="your surname" onChange={props.handleChange} />
            {/* In React, textarea is self closing */}
            <h1>{props.data.firstName} {props.data.lastName}</h1>
            <input type="number" value={props.data.age} name="age" onChange={props.handleChange} />
            <br />
            <textarea value={"Some default value "} />
            <br />
            <input type="checkbox" name="isFriendly" checked={props.data.isFriendly} onChange={props.handleChange} /> is friendly
            <br />
            <input type="radio" name="gender" value="male" checked={props.data.gender === "male"} onChange={props.handleChange} /> male
            <br />
            <input type="radio" name="gender" value="female" checked={props.data.gender === "female"} onChange={props.handleChange} /> female
            <h2>You are a {props.data.gender} </h2>
            <br />
            <label>Favorite colour:</label>
            <select value={props.data.favColor} onChange={props.handleChange} name="favColor">
                <option value="">Please select colour:</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="red">red</option>
            </select>
            <h2>your favorite colour is {props.data.favColor} </h2>
            <label>
                <input
                    type="checkbox"
                    name="isVegan"
                    onChange={props.handleChange}
                    checked={props.data.isVegan}
                /> Vegan?
            </label>
            <label>
                <input
                    type="checkbox"
                    name="isKosher"
                    onChange={props.handleChange}
                    checked={props.data.isKosher}
                /> kosher?
            </label>
            <label>
                <input
                    type="checkbox"
                    name="isLactoseFree"
                    onChange={props.handleChange}
                    checked={props.data.isLactoseFree}
                /> lactose free?
            </label>
            <br />
            <p>Your dietary restrictions:
                Vegan: {props.data.isVegan ? "Yes" : "No"}<br />
                Kosher: {props.data.isKosher ? "Yes" : "No"}<br />
                Lactose free: {props.data.isLactoseFree ? "Yes" : "No"}<br />
            </p>
            <button>Submit</button>
            {/* instead of <input type="submit" /> */}
        </form>
    )
}

export default FormComponent