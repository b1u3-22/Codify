import './App.scss';
import React from 'react';
import LoginForm from './LoginForm/LoginForm'
import { Container, Row, Col } from 'react-grid-system';

class LogIn extends React.Component{
    render(){

        let landingPageStyle = {
            height: '100vh'
        }

        return(
            <Container className = 'LandingPage' style = {landingPageStyle}>
                <Row>
                    <Col xl = {12}>
                        <h1>Log in to Codify</h1>
                    </Col>
                </Row>
                <Row className = "UpgradedRow">
                    <Col className = "CentredColumn" lg = {4} sm = {10}>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LogIn;