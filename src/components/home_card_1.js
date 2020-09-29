import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const home_card_1 = (props) => {
  return (
    <div>
        
      <Card body style = {body1}>
        <CardTitle style = {Card1} > Portfolio Website </CardTitle>
        <p style = {caption1}> React </p>
        <CardText style = {descript1} >Worked With: <br/> - xyz<br/> - xyz </CardText>
      </Card>

      <Card body style = {body1}>
        <CardTitle style = {Card1} > Portfolio Website </CardTitle>
        <p style = {caption1}> React </p>
        <CardText style = {descript1} >Worked With: <br/> - xyz<br/> - xyz </CardText>
      </Card>

      <Card body style = {body1}>
        <CardTitle style = {Card1} > Portfolio Website </CardTitle>
        <p style = {caption1}> React </p>
        <CardText style = {descript1} >Worked With: <br/> - xyz<br/> - xyz </CardText>
      </Card>

      <Card body style = {body1}>
        <CardTitle style = {Card1} > Portfolio Website </CardTitle>
        <p style = {caption1}> React </p>
        <CardText style = {descript1} >Worked With: <br/> - xyz<br/> - xyz </CardText>
      </Card>

      <Card body style = {body1}>
        <CardTitle style = {Card1} > Portfolio Website </CardTitle>
        <p style = {caption1}> React </p>
        <CardText style = {descript1} >Worked With: <br/> - xyz<br/> - xyz </CardText>
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