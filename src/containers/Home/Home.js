import React from "react"

import Header from "../../components/Header"
import PostList from "../../components/PostList"

const Home = ({ history }) => {
    return (
        <div>
            <Header type="Home" />
            <PostList type="Home" history={history} />
        </div>
    )
}

export default Home
