import React, { useState, useEffect } from "react"
import axios from "axios"
import "./PostCard.css"
import GradeIcon from "@material-ui/icons/Grade"
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined"

const getUser = async (uid) => {
    const response = await axios.get(
        `http://localhost:3001/routes/users/${uid}`
    )
    return response.data
}

const PostCard = ({ key, Likes, Author, Content }) => {
    const [user, setUser] = useState(0)
    useEffect(() => {
        getUser(Author).then((user) => {
            // console.log(user)
            setUser(user)
        })
    }, [])

    return (
        <div className="list-item" key={key}>
            <div className="list-item-left">
                <div
                    className="list-item-profile"
                    style={{
                        backgroundImage: `url(${user.imageUrl})`,
                    }}
                ></div>
                <div className="list-item-like">
                    <div className="list-item-like-image">
                        <GradeIcon />
                    </div>
                    <div className="list-item-like-number">{Likes.length}</div>
                </div>
            </div>
            <div className="list-item-content">{Content}</div>
        </div>
    )
}

export default PostCard
