import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const home_card_1 = (props) => {
  return (
    <div>
        
      <Card body style = {body1}>
        <CardTitle style = {Card1} > University College London </CardTitle>
        <p style = {caption1}> Graduating: 2022 </p>
        <CardText style = {descript1} >MEng Mechanical Engineering:
        <br/> - 1st Class BEng Achieved Thus Far
        <br/> - Modules: Cognitive Systems, Programming Theory, Entrepreneurship
        </CardText>
      </Card>

      <Card body style = {body1}>
        <CardTitle style = {Card1} > Developer @ Learning Labs </CardTitle>
        <p style = {caption1}> ReactJS </p>
        <CardText style = {descript1} >Software Developer for Education Company:
        <br/> - Worked in a team of 3 to develop interactive portal for students
        <br/> - Presented student stats, KPI's and performances 
        </CardText>
      </Card>

      <Card body style = {body1}>
        <CardTitle style = {Card1} > Engineer @ Re-Able </CardTitle>
        <p style = {caption1}> 3D-Printing + Python </p>
        <CardText style = {descript1} >Engineer for Social Enterprise Start-Up:
        <br/> - Designed affordable prosthetics for children with physical disabilities
        <br/> - Programmed software to generate CAD designs from stump measurements, thus speeding up production
        </CardText>
      </Card>

      <Card body style = {body1}>
        <CardTitle style = {Card1} > UAS Drone Challenge </CardTitle>
        <p style = {caption1}> Python </p>
        <CardText style = {descript1} >University Competition
        <br/> - Created image recognition program that uses computer vision to identify drop points by scanning symbols
        <br/> - Used TensorFlow, OpenCV Library and Google’s Tesseract to train neural network
        </CardText>
      </Card>

      <Card body style = {body1}>
        <CardTitle style = {Card1} > (This) Portfolio Website </CardTitle>
        <p style = {caption1}> ReactJS, NodeJS, HTML, CSS </p>
        <CardText style = {descript1} >Personal Project
        <br/> - Built own website in ReactJS to develop front-end skills and understanding of servers
      </CardText>
      </Card>

    </div>
  );
};

const body1 = {

    borderColor: '#6F6F6F',
    marginBottom: '0.5vw',
    borderRadius: '0',
    maxWidth: '770px'
    
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



export default home_card_1;


      {/* <Card body className="text-center">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </Card> */}