import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // and this is how we unmount
        return () => {  // this return is the equivalent of componentWillUnmount
            console.log('Comnonent unmounted')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, []) // so, runs only once - same as componentDidMount

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
