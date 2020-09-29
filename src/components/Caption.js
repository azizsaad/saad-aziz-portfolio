import React from 'react'
import './caption_style.css';

export default function Caption() {
    return (
        <div style = {captionStyle} >

            <p className = "caption" > I am a front end developer in London. I mostly write using technologies such as React, Bootstrap and Node. I use my design
                to make cool CSS.
            </p>

        </div>
    )
}

const captionStyle = {
    color: 'black',
    fontSize: '24px',
    
    // border: '1px solid black',
}