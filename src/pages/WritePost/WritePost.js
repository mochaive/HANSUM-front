import React, { useState, useEffect } from "react"
import axios from "axios"
import InputColor from "react-input-color"
import Select from "react-select"

import "./WritePost.css"
import Header from "../../components/Header"

const options = [
    { value: 0, label: "0시" },
    { value: 1, label: "1시" },
    { value: 2, label: "2시" },
    { value: 3, label: "3시" },
    { value: 4, label: "4시" },
    { value: 5, label: "5시" },
    { value: 6, label: "6시" },
    { value: 7, label: "7시" },
    { value: 8, label: "8시" },
    { value: 9, label: "9시" },
    { value: 10, label: "10시" },
    { value: 11, label: "11시" },
    { value: 12, label: "12시" },
    { value: 13, label: "13시" },
    { value: 14, label: "14시" },
    { value: 15, label: "15시" },
    { value: 16, label: "16시" },
    { value: 17, label: "17시" },
    { value: 18, label: "18시" },
    { value: 19, label: "19시" },
    { value: 20, label: "20시" },
    { value: 21, label: "21시" },
    { value: 22, label: "22시" },
    { value: 23, label: "23시" },
    { value: 24, label: "24시" },
]

const postPost = async (data) => {
    const response = await axios.post(
        `http://localhost:3001/routes/posts`,
        data
    )
    return response.data
}

const EditUser = ({ history }) => {
    const [isPublic, setIsPublic] = useState(true)
    const [color, setColor] = useState(0)
    const [startTime, setStartTime] = useState(0)
    const [finishTime, setFinishTime] = useState(0)

    const onClickSuccess = () => {
        const postData = {
            content: document.getElementById("content").value,
            author: localStorage.getItem("uid"),
            time: {
                startTime: startTime.value,
                finishTime: finishTime.value,
            },
            color: color.hex,
            public: isPublic,
        }

        postPost(postData)
            .then((res) => {
                alert("등록이 완료되었습니다.")
                history.push("/")
            })
            .catch((err) => {
                alert("모든 요소를 입력해주세요.")
            })
    }

    return (
        <div>
            <Header
                type="WritePost"
                history={history}
                onClick={onClickSuccess}
            />
            <div className="container-write-post">
                <div className="container-contents">
                    <div className="btn-group" data-toggle="buttons">
                        <label className="btn-left active">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="options"
                                id="option1"
                                autocomplete="off"
                                value="true"
                                onChange={setIsPublic}
                                checked
                            />
                            공개
                        </label>
                        <label className="btn-right">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="options"
                                id="option2"
                                value="false"
                                onChange={setIsPublic}
                                autocomplete="off"
                            />
                            비공개
                        </label>
                    </div>
                </div>
                <div className="container-contents">
                    <div className="container-contents-time">
                        <Select
                            value={startTime}
                            onChange={setStartTime}
                            options={options}
                            name={startTime}
                        />
                        <div
                            style={{ marginLeft: "20px", marginRight: "20px" }}
                        >
                            ~
                        </div>
                        <Select
                            value={finishTime}
                            onChange={setFinishTime}
                            options={options}
                            name={finishTime}
                        />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="container-contents">
                    <div className="container-contents-color">
                        <div>
                            <h5>배경 색상</h5>
                        </div>
                        <InputColor
                            style={{
                                width: "25px",
                                height: "25px",
                                marginLeft: "40px",
                            }}
                            initialValue="#ffffff"
                            onChange={setColor}
                        />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="container-contents-textarea">
                    <textarea
                        id="content"
                        cols="30"
                        placeholder="100자 이내로 입력하세요."
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default EditUser
