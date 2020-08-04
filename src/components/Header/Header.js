import React from "react"
import "./Header.css"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

const Header = ({ type, history, onClick }) => {
    const onClickBack = () => {
        history.goBack()
    }

    if (type === "Home") {
        return (
            <div>
                <div className="status-bar">
                    <div
                        className="back-button"
                        style={{ visibility: "hidden" }}
                    >
                        <ArrowBackIcon />
                    </div>
                    <div className="logo">HANSUM</div>
                    <div className="text-button">글쓰기</div>
                </div>
            </div>
        )
    } else if (type === "Rank") {
        return (
            <div>
                <div className="status-bar">
                    <div
                        className="back-button"
                        style={{ visibility: "hidden" }}
                    >
                        <ArrowBackIcon />
                    </div>
                    <div className="logo">랭킹</div>
                    <div
                        className="text-button"
                        style={{ visibility: "hidden" }}
                    >
                        글쓰기
                    </div>
                </div>
            </div>
        )
    } else if (type === "User") {
        return (
            <div>
                <div className="status-bar">
                    <div
                        className="back-button"
                        style={{ visibility: "hidden" }}
                    >
                        <ArrowBackIcon />
                    </div>
                    <div className="logo">마이페이지</div>
                    <div
                        className="text-button"
                        style={{ visibility: "hidden" }}
                    >
                        글쓰기
                    </div>
                </div>
            </div>
        )
    } else if (type === "Register") {
        return (
            <div>
                <div className="status-bar-register">
                    <div className="back-button" onClick={onClickBack}>
                        <ArrowBackIcon />
                    </div>
                    <div className="logo" style={{ visibility: "hidden" }}>
                        HANSUM
                    </div>
                    <div className="text-button" onClick={onClick}>
                        완료
                    </div>
                </div>
            </div>
        )
    } else if (type === "EditUser") {
        return (
            <div>
                <div className="status-bar-register">
                    <div className="back-button" onClick={onClickBack}>
                        <ArrowBackIcon />
                    </div>
                    <div className="logo" style={{ visibility: "visible" }}>
                        프로필 수정
                    </div>
                    <div className="text-button" onClick={onClick}>
                        완료
                    </div>
                </div>
            </div>
        )
    }
}
export default Header
