import React, { useState, useEffect } from "react"
import axios from "axios"
import "./EditUser.css"
import Header from "../../components/Header"

const getUser = async (uid) => {
    const response = await axios.get(
        `http://localhost:3001/routes/users/${uid}`
    )
    return response.data
}

const patchUser = async (uid, data) => {
    const response = await axios.patch(
        `http://localhost:3001/routes/users/${uid}`,
        data
    )
}

const EditUser = ({ history }) => {
    useEffect(() => {
        getUser(localStorage.getItem("uid")).then((data) => {
            document.getElementById("input-user-name").value = data.userName
        })
    }, [])
    // user 정보 받아서 넣어놓기
    // user 정보 업데이트 하기

    const onClickSuccess = () => {
        const patchData = {
            userName: document.getElementById("input-user-name").value,
        }

        patchUser(localStorage.getItem("uid"), patchData).then((res) => {
            alert("수정이 완료되었습니다.")
            history.push("/user")
        })
    }

    return (
        <div>
            <Header
                type="EditUser"
                history={history}
                onClick={onClickSuccess}
            />
            <div className="container-register">
                <div className="text-info" style={{ visibility: "hidden" }}>
                    서비스를 위한 <span className="text-info-accent">정보</span>
                    를 <br />
                    입력해주세요.
                </div>
                <div className="container-register-content">
                    <label for="image-url">
                        <div
                            id="profile-image"
                            className="profile-image"
                            alt="User Profile"
                            style={{
                                backgroundImage: `url("https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg")`,
                            }}
                        />
                    </label>

                    <input
                        id="image-url"
                        type="file"
                        // onChange={(e) => handleFileInput(e)}
                        style={{
                            display: "none",
                        }}
                    />

                    <div className="container-register-content-name">
                        <input
                            className="input-name"
                            placeholder="이름을 입력해주세요."
                            id="input-user-name"
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser
