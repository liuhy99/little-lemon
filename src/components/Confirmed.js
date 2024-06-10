import React, { useState } from "react"
import rsvimg1 from "../components/assets/rsvimg1.jpg"
import rsvimg2 from "../components/assets/rsvimg2.jpg"
import rsvimg3 from "../components/assets/rsvimg3.jpg"

import "./Confirmed.css"

function Confirmed () {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!formData.firstname.trim()) {
            validationErrors.firstname = "firstname is required"
        }

        if (!FormData.lastname.trim()) {
            validationErrors.lastname = "email is required"
        }

        if (!FormData.email.trim()) {
            validationErrors.email = "email is required"
        } else if (/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "email is not valid"
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully")
        }


    }


    return (
        <>
            <section className="comfirmed">
                <article className="con-header">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="con-info1">
                            <p className="info1">*First&nbsp;Name</p>
                            <p>*Last&nbsp;Name</p>
                        </div>
                        <div className="input1">
                            <input className="firstname" type="text" placeholder="First name" id="firstname" name="name" required minlength="2" maxlength="20" onchange={handleChange} />
                            {errors.firstname && <span>{errors.firstname}</span>}
                            <input className="lastname" type="text" placeholder="Last name" id="lastname" name="name" required minlength="2" maxlength="20" onchange={handleChange} />
                            {errors.lastname && <span>{errors.lastname}</span>}
                        </div>
                        <div className="con-info2">
                            <p className="info2">*E&nbsp;-&nbsp;mail</p>
                            <p>Phone&nbsp;Number</p>
                        </div>
                        <div className="input2">
                            <input className="email" placeholder="you@compony.com" type="email" id="email" name="email" required minlength="2" onchange={handleChange} />
                            {errors.email && <span>{errors.email}</span>}
                            <input className="phone" type="text" id="phone" name="phone" required minlength="2" maxlength="15" />
                        </div>
                        <button className="con-footer-button" >Confirm Reservation</button>

                    </form>

                    <div className="request">
                        <p>Special Requests</p>
                    </div>
                    <div className="imput3">
                        <textarea id="requests" name="requests" row="10" col="33" />
                    </div>

                </article>


                <div className="con-imgs">
                    <div className="conimg1">
                        <img src={rsvimg1} alt="" />
                    </div>
                    <div className="conimg2">
                        <img src={rsvimg2} alt="" />
                    </div>
                    <div className="conimg3">
                        <img src={rsvimg3} alt="" />
                    </div>


                </div>


            </section>
        </>
    )
}
export default Confirmed