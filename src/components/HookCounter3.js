// rfce
import React, { useState } from 'react'

function HookCounter3() {

    // the default value will be an object
    const [name, setName] = useState({ firstname: '', lastName: '' })

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    // setName does not append automatically - as setState does, so we use spread operator
                    // copy every property on the name object, and then override firstName
                    onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input
                    type="text"
                    value={name.lastName}
                    // copy every property on the name object, and then override lastName
                    onChange={e => setName({ ...name, lastName: e.target.value })} />
                <h2>Your first name is - {name.firstName} </h2>
                <h2>Your last name is - {name.lastName} </h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounter3
