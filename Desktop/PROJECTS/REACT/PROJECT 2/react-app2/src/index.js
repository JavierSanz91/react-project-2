import React from "react"
import ReactDOM from "react-dom"
import styles from "../src/styles.css"
import photo from "../src/images/Sabina Shirinskaia.jpeg"
import emailIcon from "../src/icons/emailIcon.png";
import linkedinIcon from "../src/icons/linkedinIcon.svg";
import iconinstagram from "../src/icons/iconinstagram.png"

function Header() {
    return (
        <div className="photo-container">
            <img className="photo" src={photo} />
        </div>
    )
}

function Main() {
    return (
        <div className="main-block">
            <div>
                <h1 className="name">Sabina Shirinskaia</h1>
                <h3 className="description">Lifestyle and brand photographer</h3>
                <h4 className="website" target="_blank"><a href="https://www.shirinskaia.com/">shirinskaia.com</a></h4>
            </div>
            <div className="buttons">
            <a href="shirinskaya.sabina@gmail.com" target="_blank"><button className="email-button"><img className="email-icon" src={emailIcon} alt="email"/>Email</button></a>
            <a href="https://www.linkedin.com/in/sabina-shirinskaya/" target="_blank"><button className="linkedin-button" ><img src={linkedinIcon} className="linkedin-icon" alt="linkedin"/>Linkedin</button></a>

            </div>
            <div>
                <h2 className="about">About</h2>
                <p className="about-description">Hello, I'm Sabina Shirinskaia, a 29-year-old girl from Moscow, living my dream as a lifestyle and brand photographer across Europe. I capture life's moments and build visual narratives for brands with love!</p>
            </div>
            <div>
                <h2 className="interest">Interests</h2>
                <p className="interest-description">I’m a music lover who's heart beats with every rhythm. An Instagram enthusiast, I adore sharing my world. As a travel geek, I cherish exploring new places. I can't resist a good cup of coffee, adore diving into a captivating book, and absolutely love fashion!</p>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <>
        <div className="footer-background">
            <a href="https://www.instagram.com/sabina.shirinskaia/" target="_blank"><img className="instagram" src={iconinstagram} /></a>
        </div>
    </>
    )
}

function Page() {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'));