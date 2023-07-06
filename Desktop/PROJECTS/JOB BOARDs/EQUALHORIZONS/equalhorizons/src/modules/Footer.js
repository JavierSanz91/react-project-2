import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
        <div className="legal-section">
            <p className="legal-terms">Legal terms</p>
            <div className="legal-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of use</a>
            <a href="#">Cookie policy</a>
            <a href="#">Accept use policy</a>
            </div>
        </div>
        <div className="super-footer">
            <p className="rights-reserved">EQUALHORIZONS LLC @ - All rights reserved</p>
            <div className="social-icons">
            <a href="#"><p className="Twitter">Follow us on Twitter</p></a>
            <a href="#"><p className="Linkedin">Follow us on Linkedin</p></a>
            </div>
        </div>
    </div>
  );
}
