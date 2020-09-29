import React from 'react'

function Footer() {
    return (
        <div>
            <p style = {footerStyle} > Made By Saad Aziz</p>
        </div>
    )
}

const footerStyle = {

    color: 'black',
    fontSize: '25px',

    float: 'right',
 
    // border: '1px solid black',
}

export default Footer;