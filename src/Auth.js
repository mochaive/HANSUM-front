import React, { useEffect } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import axios from "axios"

import Login from "./pages/Login"
import Register from "./pages/Register"

const checkUser = async () => {
    const response = await axios.get(`http://localhost:3001/routes/auth/check`)
    return response.data
}

const Auth = ({ match }) => {
    useEffect(() => {
        checkUser().then((data) => {
            console.log("uid: " + data.uid)
            localStorage.setItem("uid", data.uid)
        })
    }, [])

    if (localStorage.getItem("uid") === "null") {
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
    } else {
        return (
            <div>
                <Route exact path="/auth" component={Login} />
                <Route path="/auth/register" component={Register} />
            </div>
        )
    }
}

export default Auth
