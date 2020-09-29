import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default function Cvpage() {
    return (
        <React.Fragment>

        <Card body style = {body1}>
        <CardTitle style = {Card1} > Portfolio Website </CardTitle>
        <p style = {caption1}> React </p>
        <CardText style = {descript1} >Worked With: <br/> - xyz <br/> - xyz <br/> - xyz <br/> - xyz <br/> - xyz </CardText>
        </Card>

        </React.Fragment>
    )
}

const body1 = {

    borderColor: '#6F6F6F',
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