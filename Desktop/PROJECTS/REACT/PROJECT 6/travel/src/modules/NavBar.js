import React from "react"
import world from "../images/world.png"

export default function Navbar(){
    return (
        <div className="header">
            <img className="icon" src={world} />
            <h1 className="title">my travel journal.</h1>
        </div>
    )
}