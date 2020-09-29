import React from 'react';
import {Link} from 'react-router-dom';

export default function Contacttab() {
    return (
        <div>
            
             <p style = {ContactStyle}> <Link to = "/contact"  style = {contactlinkStyle} onMouseOver = {mouseOn} onMouseLeave = {mouseOff} >
                 | Contact
            </Link> </p> 

        </div>
    )
}

const ContactStyle = {

    fontSize: '24px',

    // border: '1px solid black', 

}

function mouseOn(e) {
    e.target.style.color = 'rgba(0,0,0,0.2)'
  }

function mouseOff(e) {
    e.target.style.color = '#000000'
}

const contactlinkStyle = {

    color: '#000000',
    textDecoration: 'none',

}