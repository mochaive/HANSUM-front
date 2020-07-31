import React, { Component } from "react"

import Header from "./components/Header"
import BottomNav from "./components/BottomNav"

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <BottomNav />
                {this.props.children}
            </div>
        )
    }
}

export default App
