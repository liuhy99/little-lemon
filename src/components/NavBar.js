import navIcon from '../components/assets/logo.png'
import "./NavBar.css"
import { Link } from "react-router-dom"



function NavBar () {
    return (
        <>
            <nav>
                <a>
                    <img id="logo" src={navIcon} alt="navIcon"></img>
                </a>
                <div>
                    <ul id="navbar">
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link to="/">ABOUT</Link></li>
                        <li><a href="index.html">MENU</a></li>
                        <li><Link to="/reservation">RESERVATIONS</Link></li>
                        <li><a href="index.html">ODER ONLINE</a></li>
                        <li><a href="index.html">LOGIN</a></li>
                    </ul>
                </div>
            </nav>



        </>

    )
}

export default NavBar