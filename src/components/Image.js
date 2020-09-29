import React from 'react'
import logo from './image.png'

export default function Image() {
    return (
        <div>
            <img style = {imageStyle} src={logo} alt="Logo" width = '200px'/>
        </div>
    )
}

const imageStyle = {

    display: 'flex',
    alignItems: 'center',

    paddingLeft: '1vw',

    // border: '1px solid black',
}