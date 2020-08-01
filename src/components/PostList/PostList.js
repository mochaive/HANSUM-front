import React, { useState, useEffect } from "react"
import axios from "axios"
import PostCard from "../PostCard"
import "./PostList.css"

const getPosts = async () => {
    const response = await axios.get(`http://localhost:3001/routes/posts`)
    return response.data
}

let cnt = 0
const PostList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then((posts) => {
            setPosts(posts)
            console.log(posts)
        })
    }, [])

    return (
        <div className="list">
            {posts.map((post, index) => (
                <PostCard
                    key={post._id}
                    Likes={post.likes}
                    Content={post.content}
                    Author={post.author}
                />
            ))}
        </div>
    )
}

export default PostList
