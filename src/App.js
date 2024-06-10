import React from "react"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Menu from "./components/Menu"
import Evaluate from "./components/Evaluate"
import OurStory from "./components/OurStory"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Reservation from "./components/Reservation"
import Confirmed from "./components/Confirmed"


import './App.css'

import { Route, Routes } from "react-router-dom"

function App () {


  return (
    <div className="App">


      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Routes>
        <Route path="/confirmed" element={<Confirmed />} />
      </Routes>








    </div>
  )
}

export default App
