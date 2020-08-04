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

const getPost = async (uid) => {
    const response = await axios.get(
        `http://localhost:3001/routes/posts/${uid}`
    )
    return response.data
}

const updateLike = async (_id, data) => {
    const response = await axios.post(
        `http://localhost:3001/routes/posts/likes/${_id}`,
        data
    )
    return response.data
}

const PostCard = ({
    _id,
    key,
    Color,
    Likes,
    Author,
    Content,
    type,
    history,
}) => {
    const [user, setUser] = useState(0)
    const [icon, setIcon] = useState(0)
    const [likesNumber, setLikesNumber] = useState(0)

    useEffect(() => {
        getUser(Author).then((user) => {
            setUser(user)
        })
        if (Likes.includes(localStorage.getItem("uid"))) {
            setIcon(<GradeIcon />)
        } else {
            setIcon(<GradeOutlinedIcon />)
        }
        setLikesNumber(Likes.length)
    }, [])

    const onClick = async () => {
        const postData = {
            uid: localStorage.getItem("uid"),
        }
        await updateLike(_id, postData)
            .then((res) => {
                getPost(_id).then((data) => {
                    if (data.likes.includes(localStorage.getItem("uid"))) {
                        setIcon(<GradeIcon />)
                        setLikesNumber(data.likes.length)
                    } else {
                        setIcon(<GradeOutlinedIcon />)
                        setLikesNumber(data.likes.length)
                    }
                })
            })
            .catch((err) => {
                alert("오류가 발생했습니다.")
            })
    }

    return (
        <div
            className="list-item"
            key={key}
            style={{ boxShadow: `0 0 10px ${Color}` }}
        >
            <div className="list-item-left">
                <div
                    className="list-item-profile"
                    style={{
                        backgroundImage: `url(${user.imageUrl})`,
                    }}
                ></div>
                <div className="list-item-like">
                    <div className="list-item-like-image" onClick={onClick}>
                        {icon}
                    </div>
                    <div id="like-number" className="list-item-like-number">
                        {likesNumber}
                    </div>
                </div>
            </div>
            <div className="list-item-content">{Content}</div>
        </div>
    )
}

export default PostCard
