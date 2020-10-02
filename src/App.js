import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import disableScroll from 'disable-scroll';
 
import Title from './components/Title';
import Image from './components/Image';
import Caption from './components/Caption';
import Footer from './components/Footer';
import Github from './components/github';
import Linkedin from './components/linkedin';
import Hometab from './components/Hometab';
import Cvtab from './components/Cvtab';
import Cvpage from './components/Cvpage';
import Contacttab from './components/Contacttab';
import Home_card_1 from './components/home_card_1';
import Contactpage from './components/Contactpage';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends React.Component {

  render() {
  return (

    <Router >
        <Container fluid >
      
        <Row>

          <Col style = {colStyle1}>
          
            <Container style = {mainbox_contStyle1} >

                <Title/>

                <Image/>

            </Container>

            <Container style = {mainbox_contStyle2} >
             
            <Caption/>

            </Container>

            <Container style = {contStyle3} >

                <Hometab/>
                <Cvtab/>
                <Contacttab/>

            </Container>

            <Container style = {contStyle2} >

                <Footer/>
                <td onClick={()=> window.open('http://github.com/azizsaad', "_blank")}>
                  <Github/>
                  </td>
                <td onClick={()=> window.open("https://www.linkedin.com/in/saadaziz101", "_blank")}>
                  <Linkedin/>
                </td>

            </Container>

          </Col>

                <Route exact path = "/" render = {props => (
                  <React.Fragment>

                      <Col style = {colStyle2} >
                            <Container style = {rhs_contStyle1} >

                              <Home_card_1/>

                            </Container>
                        </Col> 

                  </React.Fragment>
                )}/>

                <Route path = "/curriculum-vitae" render = {props => (
                  <React.Fragment>
                      <Col style = {colStyle2} > 

                      <Container style = {rhs_contStyle1} >
                      <Cvpage/> 
                      </Container>
                      
                      </Col> 

                  </React.Fragment>
                )}/>

                <Route path = "/contact" render = {props => (

                  <React.Fragment>

                      <Col style = {colStyle2} > 

                      <Container style = {rhs_contStyle2} >

                      <Contactpage/>

                      </Container>
                      </Col> 

                  </React.Fragment>
                )}/>


           </Row>

        </Container>
    </Router>

  )
}
}

const page = {
  overflow: 'hidden',
}

const colStyle1 = {
  height: '100vh',
  color: '007bff',
  paddingLeft: '0',
  paddingRight: '0',
  // border: '1px solid black',
  
  maxHeight: '1000px',
  
}

const colStyle2 = {
  color: '#000000',
  // border: '1px solid red',
  float: 'left',
  
}

const mainbox_contStyle1 = {
  
  paddingLeft: '0',
  paddingRight: '0',
  paddingTop: '4vw',

  display: 'flex',
  alignItems: 'center',

  float: 'right',
  width: '40vw',
  
  // border: '1px solid black',
  // backgroundColor: '#9FFDCE',

  maxWidth: '770px',
}

const mainbox_contStyle2 = {
  
  paddingLeft: '0',
  // paddingRight: '18vw',
  paddingTop: '0.5vw',

  display: 'flex !important',
  alignItems: 'center !important',

  float: 'right',
  width: '40vw',
  
  // border: '1px solid black',
  // backgroundColor: '#9FFDCE',

  maxWidth: '770px',
}


const contStyle2 = {
  paddingLeft: '0',
  paddingRight: '0',

  display: 'flex',
  bottom: '0',
  right:'0',
  position: 'absolute',

  width: '40vw',
  paddingBottom: '4vw',
  
  // border: '1px solid red',
  // backgroundColor: '#8A89FF',

  maxWidth: '770px',
}

const contStyle3 = {
  paddingLeft: '0',
  paddingRight: '0',

  display: 'flex',
  flexDirection: 'column',
  right:'0',
  bottom: '0',
  position: 'absolute',

  width: '40vw',
  paddingBottom: '11vw',
  
  // border: '1px solid red',
  // backgroundColor: 'rgba(225,246,103,0.4)',

  maxWidth: '770px',
}

const rhs_contStyle1 = {

  paddingLeft: '0',
  paddingRight: '0',
  float: 'left',
  paddingTop: '4vw',

  width: '40vw',

  // border: '1px solid red',
  // backgroundColor: 'rgba(225,246,103,0.4)',

  overflow: 'auto',
}

const rhs_contStyle2 = {

  paddingLeft: '0',
  paddingRight: '0',
  float: 'left',
  paddingTop: '4vw',

  width: '40vw',

  maxWidth: '770px',

  // border: '1px solid red',
  // backgroundColor: 'rgba(225,246,103,0.4)',
}

export default App;