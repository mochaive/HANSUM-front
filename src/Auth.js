import React from "react"
import { Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"

const Auth = ({ match }) => {
    return (
        <div>
            <Route exact path="/auth" component={Login} />
            <Route path="/auth/register" component={Register} />
        </div>
    )
}

export default Auth
