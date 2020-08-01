import React from "react"
import { render } from "@testing-library/react"

import Header from "../../components/Header"
import PostList from "../../components/PostList"

const Home = () => {
    return (
        <div>
            <Header type="Home" />
            <PostList />
        </div>
    )
}

export default Home
