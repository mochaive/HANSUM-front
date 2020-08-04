import React from "react"
import { NavLink } from "react-router-dom"
import "./BottomNav.css"
import HomeIcon from "@material-ui/icons/Home"
import AssessmentIcon from "@material-ui/icons/Assessment"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

const MenuItem = ({ children, to }) => (
    <NavLink
        exact
        to={to}
        className="menu-item"
        activeClassName="menu-item active"
    >
        {children}
    </NavLink>
)

const BottomNav = () => {
    return (
        <div>
            <div className="menu" style={{ visibility: "none" }}>
                <MenuItem to={"/"}>
                    <HomeIcon />
                </MenuItem>
                <MenuItem to={"/rank"}>
                    <AssessmentIcon />
                </MenuItem>
                <MenuItem to={"/user"}>
                    <AccountCircleIcon />
                </MenuItem>
            </div>
        </div>
    )
}

export default BottomNav
