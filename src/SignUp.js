import React from 'react';
import './App.scss';
import Card from './Card/Card.js'
import Button from './Button/Button.js'
import Separator from './Separator/Separator.js'
import { Container, Row, Col } from 'react-grid-system';

function SignUp() {
  return (
    <Container className = 'LandingPage'>
      <Row>
        <Col xl = {12}>
          <h1>Sign up to Codify</h1>
          <h2>And become one of us</h2>
        </Col>
      </Row>
      <Row>
        <Col className = "CentredColumn" xl = {12}>
          <Separator size = "medium"/>
        </Col>
      </Row>
      <Row className = "UpgradedRow">
        <Col lg = {3} sm = {10}>
          <Card text = "See what others posted or create a post yourself! Share your project, thoughts or ideas. You can place your offers here." imgloc = 'top' imgsrc = {require('./resources/FeedIcon.svg')}/>
        </Col>
        <Col lg = {3} sm = {10}>
          <Card text = "Find developer that suits you the best with his experience and price for your project or website." imgloc = 'top' imgsrc = {require('./resources/RentIcon.svg')}/>
        </Col>
        <Col lg = {3} sm = {10}>
          <Card text = "Create your profile now and connect with other people in groups interested in the same thing as you." imgloc = 'top'imgsrc = {require('./resources/ProfileIcon.svg')} />
        </Col>
      </Row>
      <Row>
        <Col className = "CentredColumn" xl = {12}>
          <Button text = "Find out more below"/>
        </Col>
      </Row>
    </Container>
    
  );
}

export default SignUp;
