import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    // const [posts, setPosts] = useState([]) // gia na ferei ola ta posts -> des map
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setidFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => { console.log(err) })
    }, [idFromButtonClick]) // otherwise it will keep on fetching data

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={() => setidFromButtonClick(id)} >Hit me!</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post =>
                        <li key={post.id}>{post.title} </li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
