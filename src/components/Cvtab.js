import React from 'react';
import {Link} from 'react-router-dom';

export default function Cvtab() {
    return (
        <div>
            
             <p style = {CvStyle}><Link to = "/curriculum-vitae"  style = {cvlinkStyle} onMouseOver = {mouseOn} onMouseLeave = {mouseOff} >
                 | Curriculum Vitae
            </Link> </p> 

        </div>
    )
}

const CvStyle = {

    fontSize: '24px',
    // border: '1px solid black', 

}

function mouseOn(e) {
    e.target.style.color = 'rgba(0,0,0,0.2)'
  }

function mouseOff(e) {
    e.target.style.color = '#000000'
}

const cvlinkStyle = {

    color: '#000000',
    textDecoration: 'none',

}

