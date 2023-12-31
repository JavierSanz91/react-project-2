import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Vans from "./Vans"

export default function App() {
    return (
        <BrowserRouter>
        <nav>
            <Link to="/"></Link>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
        </Routes>
    </BrowserRouter>
    )
}