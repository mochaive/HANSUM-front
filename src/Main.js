import React, { useState, useEffect } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import axios from "axios"

import App from "./App"
import Home from "./containers/Home"
import Rank from "./containers/Rank"
import User from "./containers/User"
import Login from "./pages/Login"
import Register from "./pages/Register"

const getUser = async (uid) => {
    const response = await axios.get(
        `http://localhost:3001/routes/users/${uid}`
    )
    return response.data
}

const Main = ({ location, match }) => {
    const [success, setSuccess] = useState(true)

    useEffect(() => {
        getUser(localStorage.getItem("uid")).then((data) => {
            if (!data.uid) {
                setSuccess(false)
            }
        })
    }, [])

    if (!success) {
        return (
            <div>
                <Switch>
                    <Route exact path="/auth" component={Login} />
                    <Route path="/auth/register" component={Register} />
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/auth" />}
                    />
                </Switch>
            </div>
        )
    } else if (match.url === "/") {
        return (
            <div>
                <App />
                <Route exact path="/" component={Home} />
                <Route path="/rank" component={Rank} />
                <Switch>
                    <Route path="/user/:uid" component={User} />
                    <Route path="/user" component={User} />
                </Switch>
            </div>
        )
    } else {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/rank" component={Rank} />
                <Switch>
                    <Route path="/user/:uid" component={User} />
                    <Route path="/user" component={User} />
                </Switch>
            </div>
        )
    }
}

export default Main
