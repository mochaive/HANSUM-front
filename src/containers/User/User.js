import React, { useState, useEffect } from "react"
import "./User.css"
import axios from "axios"

import Header from "../../components/Header"

const getUser = async (uid) => {
    const response = await axios.get(
        `http://localhost:3001/routes/users/${uid}`
    )
    return response.data
}

const User = ({ match, history }) => {
    const [user, setUser] = useState(0)

    useEffect(() => {
        getUser(localStorage.getItem("uid")).then((data) => {
            setUser(data)
        })
    }, [])

    const logout = () => {
        localStorage.removeItem("uid")
        history.push("/auth")
    }

    return (
        <div>
            <Header type="User" />
            <div className="container-user">
                <div className="my-info-row">
                    <img className="my-info-profile" src={user.imageUrl} />
                    <div className="my-info-col">
                        <div className="my-info-name">{user.userName}</div>
                    </div>
                </div>

                <div class="my-info-statics">
                    <div class="my-info-likes">
                        누적 공감 수 <span id="likes">{user.likes} </span>
                    </div>
                    <div class="my-info-best">
                        베스트 한숨 <span id="best"> {user.best} </span>
                    </div>
                </div>
            </div>
            <div class="hr"></div>
            <div
                className="setting-button"
                onClick={() => history.push("/setting")}
            >
                프로필 수정
            </div>
            <div className="hr"></div>
            <div className="setting-button" onClick={logout}>
                로그아웃
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default User
