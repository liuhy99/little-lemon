import rsvimg1 from "../components/assets/rsvimg1.jpg"
import rsvimg2 from "../components/assets/rsvimg2.jpg"
import rsvimg3 from "../components/assets/rsvimg3.jpg"

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

import "./Reservation.css"

function Reservation () {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/confirmed")
    }
    return (
        <>
            <section className="reservation">
                <article className="rsv-header">
                    <h2>Reservations</h2>
                    <div className="rsv-option">
                        <div className="radio1"><label for="indoor">Indoor Seating</label>
                            <input className="input1" type="radio" id="indoor" name="seat" value="indoor" />
                        </div>
                        <div className="radio2">
                            <label for="outdoor">Outdoor Seating</label>
                            <input className="input2" type="radio" id="outdoor" name="seat" value="outdoor" />
                        </div>
                    </div>

                    <div className="details1">
                        <div className="p1-1"><p>Date</p></div>
                        <div className="p1-2"><p>Number of Dinners</p></div>
                    </div>
                    <div className="button1">
                        <div className="button1-1">
                            <button onClick={() => console.log("select date")}>Select Date</button>
                        </div>
                        <div className="button1-2">
                            <button onClick={() => console.log("select number")}>No. of Dinners</button>
                        </div>
                    </div>
                    <div className="details2">
                        <div className="p2-1"><p>Occasion</p></div>
                        <div className="p2-2"><p>Time</p></div>
                    </div>
                    <div className="button2">
                        <div className="button2-1">
                            <button onClick={() => console.log("occasion")}>Occasion</button>
                        </div>
                        <div className="button2-2">
                            <button onClick={() => console.log("select time")}>Select Time</button>
                        </div>
                    </div>

                    <div className="rsv-imgs">
                        <div className="rsvimg1">
                            <img src={rsvimg1} alt="" />
                        </div>
                        <div className="rsvimg2">
                            <img src={rsvimg2} alt="" />
                        </div>
                        <div className="rsvimg3">
                            <img src={rsvimg3} alt="" />
                        </div>


                    </div>

                    <button className="rsv-footer-button" onClick={(e) => handleClick()}>Reserve a Table</button>
                </article>

            </section>
        </>
    )
}

export default Reservation
