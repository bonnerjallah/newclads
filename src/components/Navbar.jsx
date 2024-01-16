import { NavLink, Outlet } from "react-router-dom"

import navbarstyles from "../styles/navbarstyles.module.css"

const Navbar = () => {
    return (
        <div className={navbarstyles.mainContainer}>
            <div className={navbarstyles.mainWrapper}>
                <NavLink to="/">
                    <div>
                        <img src='/Images/logo/logo2.jpg' width={150} height={150} />
                    </div>
                </NavLink>

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
            </div>

            <Outlet />
        </div>
    )
}

export default Navbar