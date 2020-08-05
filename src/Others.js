import React, { useState, useEffect } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import axios from "axios"

import EditUser from "./pages/EditUser"
import WritePost from "./pages/WritePost"

const getUser = async (uid) => {
    const response = await axios.get(
        `http://localhost:3001/routes/users/${uid}`
    )
    return response.data
}

const Auth = ({ match }) => {
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
                    <Route path="/" render={() => <Redirect to="/auth" />} />
                    <Route path="/others/edit" component={EditUser} />
                    <Route path="/others/write" component={WritePost} />
                </Switch>
            </div>
        )
    } else {
        return (
            <div>
                <Route path="/others/edit" component={EditUser} />
                <Route path="/others/write" component={WritePost} />
            </div>
        )
    }
}

export default Auth
