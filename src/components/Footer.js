import footerImg from "../components/assets/logo-white.png"

import "./Footer.css"

function Foot () {
    return (
        <>
            <section className="footer">
                <div className="footerimg">
                    <img src={footerImg} alt=""></img>
                </div>
                <div className="sitemap">
                    <p className="sitemap1">SITE MAP</p>
                    <p className="home">Home</p>
                    <p className="about">About</p>
                    <p className="menu">Menu</p>
                    <p className="reservations">Reservations</p>
                    <p className="order">Order Online</p>
                    <p className="login">Login</p>
                </div>
                <div className="contactus">
                    <p className="contactus1">CONTACT US</p>
                    <p className="address">678 Pisa Ave, Chicago, IL 60611</p>
                    <p className="phone">(312) 593-2744</p>
                    <p className="email">customer@littlelemon.com</p>
                </div>
                <div className="connect">
                    <p className="connect1">CONNECT WITH US</p>


                </div>

            </section>
        </>
    )
}
export default Foot