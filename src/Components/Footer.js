
import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = ()=> {
    return (
      <>
        <div className="footer">
            <div>
                <p>&copy; 2022, E-commerce Website for your online sales.</p>
                <p>Contact info: <span>Tel: +393298592707</span></p>
                <span><Link to="https://isigba.ambrose94@gmail.com">Email</Link></span>
                <span><Link to="https://www.linkedin.com/in/ambrose-isigba-657000199">Linkedin</Link></span>
                  <span><Link to="https://github.com/Ambrosegithub">Github</Link></span>
                  <span><Link to="https://twitter.com/home">Twitter</Link></span>
                  <span><Link to="https://angel.co/u/ambrose-isigba">Angelist</Link></span>
                 
            </div>
        </div>
      </>
    )
}
export default Footer
