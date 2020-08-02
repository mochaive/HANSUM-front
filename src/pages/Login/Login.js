import React, { Component, useState } from "react"
import "./Login.css"

const Login = () => {
    const onClick = () => {
        document.location.href = "http://localhost:3001/routes/auth/google"
    }

    return (
        <div className="container">
            <div className="app-name">HANSUM</div>
            <div className="button-login-google" onClick={onClick}>
                <img
                    className="button-login-google-logo"
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                />
                <span className="button-login-google-text">
                    구글로 시작하기
                </span>
            </div>
        </div>
    )
}

export default Login
