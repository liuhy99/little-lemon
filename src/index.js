import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Menu from "./components/Menu"
import Evaluate from "./components/Evaluate"
import OurStory from "./components/OurStory"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />

    </BrowserRouter>

  </React.StrictMode>
);

