import React, { Component } from 'react'
import { FaGithub } from 'react-icons/fa'


export class Github extends Component {
    render() {
        return (
            <div style = {githubStyle} >
                
                <FaGithub size = '2rem' url='http://github.com/azizsaad'/>
                
            </div>
        )
    }
}

const githubStyle = {

    cursor: 'pointer',

    marginLeft: '1.25vw',
    marginRight: '1.25vw',
        
    paddingTop: '0.25vw',
    
    // border: '1px solid black',
    
}

export default Github