import React from 'react';
import './App.scss';
import Form from './Form/Form'
import { Container, Row, Col } from 'react-grid-system';

function SignUp() {
  return (
    <Container className = 'LandingPage'>
      <Row>
        <Col xl = {12}>
          <h1>Sign up to Codify</h1>
          <h2>4nd b3c0m3 0n3 0f u5</h2>
        </Col>
      </Row>
      <Row className = "UpgradedRow">
        <Col className = "CentredColumn" lg = {4} sm = {10}>
          <Form type = "signup"/>
        </Col>
      </Row>
    </Container>
    
  );
}

export default SignUp;
