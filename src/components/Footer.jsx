import { NavLink } from "react-router-dom"

import footerstyles from "../styles/footerstyles.module.css"

const Footer = () => {
    return (
        <div className={footerstyles.mainContainer}>
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/Gallery">
                    <li>Gallery</li>
                </NavLink>
                <NavLink to="/AboutUs">
                    <li>About</li>
                </NavLink>
                <NavLink to="/ContactUs">
                    <li>Contact Us</li>
                </NavLink>
            </ul>
            <div>
                &copy; 2024 Clad's Place, All Rights Reserved
            </div>
        </div>
    )
}

export default Footer