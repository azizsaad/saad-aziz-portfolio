import React, { Component } from 'react'
import { BsDownload } from 'react-icons/bs'

export class DownloadBut extends Component {
    render() {
        return (
            
            <div style = {githubStyle} >
                <BsDownload size = '1rem'/>
            </div>
        )
    }
}

const githubStyle = {

    cursor: 'pointer',
    
    // border: '1px solid black',

}

export default DownloadBut