import React, { Component } from 'react'
import { FaLinkedin } from 'react-icons/fa'

export class linkedin extends Component {
    render() {
        return (
            <div style = {githubStyle} >
                <FaLinkedin size = '2rem' url='www.linkedin.com/in/saadaziz101'/>
            </div>
        )
    }
}

const githubStyle = {

    cursor: 'pointer',
    paddingTop: '0.25vw',
    // border: '1px solid black',

}

export default linkedin