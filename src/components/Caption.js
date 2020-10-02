import React from 'react'
import './caption_style.css';

export default function Caption() {
    return (
        <div style = {captionStyle} >

            <p className = "caption" > I'm a Software Developer in London. I mostly write in Python, ReactJS, Bootstrap and Node.
            I use CSS and SaSS to make cool interactive UI's. Let's connect on Linkedin!
            </p>

        </div>
    )
}

const captionStyle = {
    color: 'black',
    fontSize: '24px',
    
    // border: '1px solid black',
}