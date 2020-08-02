import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom"
import * as serviceWorker from "./serviceWorker"

import "./index.css"
import Main from "./Main"
import Auth from "./Auth"

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/" component={Main} />
                <Redirect path="*" to="/" />
            </Switch>
        </div>
    </Router>,
    document.getElementById("root")
)

serviceWorker.unregister()
