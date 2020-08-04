import React, { useState, useEffect } from "react"
import axios from "axios"
import PostCard from "../PostCard"
import "./PostList.css"

const getPosts = async () => {
    const response = await axios.get(`http://localhost:3001/routes/posts`)
    return response.data
}

const getPostsByRank = async () => {
    const response = await axios.get(
        `http://localhost:3001/routes/posts/ranking`
    )
    return response.data
}

const PostList = ({ type, history }) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        if (type === "Home") {
            getPosts().then((posts) => {
                setPosts(posts)
            })
        } else if (type === "Rank") {
            getPostsByRank().then((posts) => {
                setPosts(posts)
            })
        }
    }, [])

    if (type === "Home") {
        return (
            <div className="list">
                {posts.map((post, index) => (
                    <PostCard
                        _id={post._id}
                        key={index}
                        Color={post.color}
                        Likes={post.likes}
                        Content={post.content}
                        Author={post.author}
                        type={type}
                        history={history}
                    />
                ))}
            </div>
        )
    } else {
        return (
            <div className="list-rank">
                {posts.map((post, index) => (
                    <PostCard
                        _id={post._id}
                        key={index}
                        Color={post.color}
                        Likes={post.likes}
                        Content={post.content}
                        Author={post.author}
                        type={type}
                        history={history}
                    />
                ))}
            </div>
        )
    }
}

export default PostList
