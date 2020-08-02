import React from "react"
import "./Header.css"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

const Header = ({ type }) => {
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
    }
}
export default Header
