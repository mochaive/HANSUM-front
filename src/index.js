import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"

import "./index.css"
import App from "./App"
import Home from "./containers/Home"
import Rank from "./containers/Rank"
import User from "./containers/User"

ReactDOM.render(
    <Router>
        <div>
            <App />
            <Route exact path="/home" component={Home} />
            <Route path="/rank" component={Rank} />
            <Route path="/user" component={User} />
            <Redirect path="/" to="/home" />
        </div>
    </Router>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
