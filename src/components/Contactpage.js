import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaThumbsDown } from 'react-icons/fa';
import Axios from 'axios';
import Col from 'react-bootstrap/Col';
import { Container } from 'reactstrap';

class Contactpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disable: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name;

        this.setState({
            [name]:value,
        }
        )}

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState ({
            disabled: true,
            emailSent: false,
        })

        console.log(this.state)

        Axios.post('http://localhost:3000', this.state)

            .then(res => {
                console.log(res)
                if(res.data.success) {

                    this.setState({
                        disabled: false,
                        emailSent: true,
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false,
                    });
                }
            })
            .catch(err => {
                
                this.setState({
                    disabled: false,
                    emailSent: false,
                });

            })
    }


    render() {

        return (

            <div>

                <Form onSubmit = {this.handleSubmit}>

                    <Form.Group >
                        <Form.Label htmlFor = "full-name" style = {labelStyle}>
                            Full Name
                        </Form.Label>
                        <Form.Control id = "full-name" name = "name" placeholder = "Enter your name"
                        type = "text" value = {this.state.name} onChange = {this.handleChange} />
                    </Form.Group>
                

                    <Form.Group>
                        <Form.Label htmlFor = "email" style = {labelStyle}>
                            Email
                        </Form.Label>
                        <Form.Control id = "email" name = "email" placeholder = "Enter your email"
                        type = "email" value = {this.state.email} onChange = {this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor = "Message" style = {labelStyle}>
                            Message
                        </Form.Label>
                        <Form.Control id = "Message" name = "Message"
                        as = "textarea" rows = "7" value = {this.state.Message} onChange = {this.handleChange} />
                    </Form.Group>
                    
                    <Button className = "d-inline-block" variant = "primary" type = "submit" disabled = {this.state.disabled} style = {labelStyle}>
                        Send
                    </Button>

                    <Container style = {msgcont} >
                    <p style = {inline} > <br/> Or, email me directly to: </p> <p style = {inlinebold} > saad.saziz@gmail.com</p>
                    </Container>

                    {this.state.emailSent == true && <p className = "d-inline success-msg"> Email Sent </p>}
                    {this.state.emailSent == false && <p className = "d-inline err-msg"> Email Not Sent </p>}

                </Form>

            </div>

        )
    }
}

const labelStyle = {
    fontSize: '20px',
    // maxWidth: '700px'
}

const unobox = {
    float: 'left',
}

const inline = {
    display: 'inline',
    fontSize: '17px',
}

const inlinebold = {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '19px',
}

const msgcont = {
    // border: '1px solid black',

    paddingLeft: '0',
    paddingRight: '0',
    bottom: '0',
    right:'0',

}

export default Contactpage;