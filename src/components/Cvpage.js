import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { FaLinkedin } from 'react-icons/fa';
import DownloadBut from './download_cv';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Cvpage() {
    return (
        <React.Fragment>

        <Card body style = {body1}>
        <Col></Col>
        <CardTitle style = {Card1} > MEng Mechanical Engineering @ UCL </CardTitle>
        <p style = {caption1}> Graduating in 2022 </p>
        <CardText style = {descript1} > On Track for a 1st Class
        <br/>
        <br/>
        </CardText>


        <CardTitle style = {Card1} > Maths, Physics, Product Design A-Levels </CardTitle>
        <p style = {caption1}> Obtained in 2017 </p>
        <CardText style = {descript1} > Achieved A*,A,A respectively 
        <br/>
        <br/>
        </CardText>

        <CardTitle style = {Card1} > Skills </CardTitle>
        <CardText style = {descript1} > Python, Javascript, HTML, CSS, MATLAB, ReactJS, NodeJS
        <br/>
        <br/>
        </CardText>

        <CardText style = {descript1} > Download Full CV Below!
        </CardText>

        </Card>

        <Card body style = {downloadstyle}>
        <Row>

        <Col style = {colStyle1}>

        <td onClick={()=> window.open('https://drive.google.com/file/d/1TZtzK-lmHUkVCs3Fp48hfy_OrAjp2Fie/view?usp=sharing', "_blank")}>
            <Row style = {{paddingLeft: '1vw'}}>
            <DownloadBut/>
            <h1 style = {{fontSize: '20px', cursor: 'pointer', paddingLeft: '0.5vw'}}>Download</h1>       
            </Row> 
        </td>
        

        
        </Col>
        </Row>

        </Card>

        </React.Fragment>
    )
}

const body1 = {

    borderColor: '#000',
    borderRadius: '0',
    maxWidth: '770px'

}

const downloadstyle = {

    borderColor: '#ffffff',
    borderRadius: '0',
    maxWidth: '770px'

}

const colStyle1 = {
    marginRight: '0',
    marginLeft: '0',
    display: 'flex',
    alignItems: 'center',
    // border: '1px solid black',
    
  }

  const colStyle2 = {
    marginRight: '0',
    marginLeft: '0',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid black',
    
    
  }
  const Card1 = {

    fontSize: '27px',
    lineHeight: '0.5',

}
const caption1 = {
    fontSize: '20px',
    color: '#7E7E7E',
    fontWeight: 'bold',
}
const descript1 = {

}