import React, { Component } from "react"

import BottomNav from "./components/BottomNav"

class App extends Component {
    render() {
        return (
            <div>
                <BottomNav />
                {this.props.children}
            </div>
        )
    }
}

export default App
