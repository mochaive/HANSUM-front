import React from "react"

import Header from "../../components/Header"
import PostList from "../../components/PostList"

const Home = ({ history }) => {
    const onClick = () => {
        history.push("/others/write")
    }
    return (
        <div>
            <Header type="Home" onClick={onClick} />
            <PostList type="Home" history={history} />
        </div>
    )
}

export default Home
