import React from 'react'
import "./index.scss"
import { FaStarOfLife } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    return (
        <div id='header-container'>
            <div className='header-parent'>
                <div className='header-child'>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <a href="/">
                            <FaStarOfLife className='header-icon' />
                        </a>
                        <h2>Ulvi</h2>
                    </div>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            Services
                        </li>
                    </ul>

                    <div className='hamburger-menu'>
                        <GiHamburgerMenu className='hamburger-menu-child'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header