import React from 'react';
import ReactDOM from 'react-dom';
import './mainPage.scss';
import Labeled from "../../components/labeled/labeled"
import Section from "../../components/section/section"
import LogIn from "../../components/logIn/logIn"
import { Container, Row, Col } from 'react-grid-system';

class mainPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {logInStyle: {display: "none"}, labelSection: []}
    }

    componentWillMount(){
        if (window.sessionStorage.getItem("loggedIn")){
            this.setState({labelSection: []})
            
        }else{
            this.setState({labelSection: [(                
                <div className="signupTextWrapper">
                    <h2 className="signUpText">Don't wait and</h2>
                    <a href = "/SignUp"><Labeled color="yellow" size="60px" text="Sign Up" /></a>
                    <p className="signUpText">or</p>
                    <span onClick = {() => this.handleLogIn()} style = {{cursor: "pointer"}}><Labeled onClick = {() => this.handleLogIn()} color="yellow" size="60px" text="Log In" /></span>
                </div>
            )]})
        }
    }


    handleLogIn(){
        this.logInRef.setState({backgroundStyle: {display: "flex"}})

        let logInInterval = setInterval(() => {

            console.log(window.sessionStorage.getItem("LoggedIn"))

            if (window.sessionStorage.getItem("loggedIn")){
                window.location.href = "/find"
                clearInterval(logInInterval)
            }
        }, 100);
    }

    render(){
        return(
            <div className = "mainPage">
            <LogIn logInStyle = {this.state.logInStyle} ref = {(logIn) => {this.logInRef = (logIn)}}/>
            <div className="landingPage">
                <img className="laptopAndServerIcon" alt="Laptop and server icon" src={require("../../resources/landingPageIcon.svg")}></img>
                <h1 className = "mainTitle">Welcome to</h1>
                <img className="codifyIcon" alt="Laptop and server icon" src={require("../../resources/codifyIcon.svg")}></img>
                <div className="longTextWrapper">
                    <h2 className="longText">A place to</h2>
                    <Labeled color="yellow" size="25px" text="Build" />
                    <Labeled color="yellow" size="25px" text="Socialize" />
                    <Labeled color="yellow" size="25px" text="Learn" />
                </div>
                {this.state.labelSection}
            </div>
            <Section  mainContentOrientation = "left" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nulla vestibulum nisi luctus pharetra sed et sem. Morbi consectetur lectus magna, ac bibendum libero porttitor sit amet. Mauris tincidunt bibendum libero ut pulvinar. Phasellus maximus lacus fringilla dolor dignissim pulvinar. Nullam quis metus justo. Aliquam nibh quam, aliquet ut quam at, aliquet placerat mi. Ut consectetur pellentesque rutrum. Nulla non sem eu erat finibus blandit ut ut enim. Pellentesque scelerisque a ligula quis ullamcorper. Aenean in rutrum mi, vitae facilisis mauris." title = "Connect with others" img = {require("../../resources/socialMediaIcon.svg")}/>
            <div className="spacer" style = {{height: "0", width: "100%", marginBottom: "15%"}}></div>
            <Section  mainContentOrientation = "right" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nulla vestibulum nisi luctus pharetra sed et sem. Morbi consectetur lectus magna, ac bibendum libero porttitor sit amet. Mauris tincidunt bibendum libero ut pulvinar. Phasellus maximus lacus fringilla dolor dignissim pulvinar. Nullam quis metus justo. Aliquam nibh quam, aliquet ut quam at, aliquet placerat mi. Ut consectetur pellentesque rutrum. Nulla non sem eu erat finibus blandit ut ut enim. Pellentesque scelerisque a ligula quis ullamcorper. Aenean in rutrum mi, vitae facilisis mauris." title = "Find the perfect team" img = {require("../../resources/teamIcon.svg")}/>
            <div className="spacer" style = {{height: "0", width: "100%", marginBottom: "10%"}}></div>
            <Section  mainContentOrientation = "left" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis nulla vestibulum nisi luctus pharetra sed et sem. Morbi consectetur lectus magna, ac bibendum libero porttitor sit amet. Mauris tincidunt bibendum libero ut pulvinar. Phasellus maximus lacus fringilla dolor dignissim pulvinar. Nullam quis metus justo. Aliquam nibh quam, aliquet ut quam at, aliquet placerat mi. Ut consectetur pellentesque rutrum. Nulla non sem eu erat finibus blandit ut ut enim. Pellentesque scelerisque a ligula quis ullamcorper. Aenean in rutrum mi, vitae facilisis mauris." title = "Show off your skills" img = {require("../../resources/resumeIcon.svg")}/>
            </div>
        )
    }


}
export default mainPage;