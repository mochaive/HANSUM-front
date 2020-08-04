import React from "react"
import "./Rank.css"

import Header from "../../components/Header"
import PostList from "../../components/PostList"

const Rank = ({ history }) => {
    return (
        <div>
            <Header type="Rank" />
            <div className="guide-text">
                위에서부터 차례대로 공감 개수가 많은 순서입니다.
            </div>
            <PostList type="Rank" history={history} />
        </div>
    )
}

export default Rank
