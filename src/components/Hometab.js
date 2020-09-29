import React from 'react';
import {Link} from 'react-router-dom';

export default function Hometab() {
    return (
        <div>

        <p style = {HometabStyle}> <Link to = "/" style = {homelinkStyle} onMouseOver = {mouseOn} onMouseLeave = {mouseOff}>
            | Home
        </Link> </p> 

        </div>
    )
}

const HometabStyle = {

    fontSize: '24px',
    
    // border: '1px solid black',

}

function mouseOn(e) {
    e.target.style.color = 'rgba(0,0,0,0.2)'
  }

function mouseOff(e) {
    e.target.style.color = '#000000'
}

const homelinkStyle = {

    textDecoration: 'none',
    color: '#000000',

}