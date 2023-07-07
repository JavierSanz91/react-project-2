import React from 'react';
import logo from "../images/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {Home} from "react-router-dom"
import {About} from "react-router-dom"
import {Vans} from "react-router-dom"

export default function Nav() {
    return (
        <nav className="nav">
        <div className="left-container">
            <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
        </div>
        <div className="">
            <Link to="/about"></Link>
            <Link to="/vans"></Link>
        </div> 
        </nav>
    );
}