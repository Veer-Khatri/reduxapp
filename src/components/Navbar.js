import React from 'react'
import { Link } from 'react-router-dom'
// import logo from "../assets/Inotebook.png"
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <nav id='nav'>
                <div id="Logo_Name">
                    {/* <Link to="/" ><img src={logo} alt="logo" /></Link> */}
                    <p>ReduxApp</p>
                </div>

                <div id="navLinks">
                    <Link id="homeBTN" className="links" to='/'>Home</Link>
                    <Link id="aboutBTN" className="links" to='/about'>About Us</Link>
                    <Link id="contactBTN" className="links" to='/contact'>Contact Us</Link>
                    <Link id="notesBTN" className="links" to='/notes'>View Notes</Link>
                </div>

                <div id="balanceDiv">
                    <button id="balanceBtn" disabled={true} >Your Balance: 1000000</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar


