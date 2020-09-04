import React from 'react';
import ReactDOM from 'react-dom';
import './signUp.scss';
import axios from "axios";
import { Container, Row, Col } from 'react-grid-system';
import { AnimateGroup } from 'react-animate-mount'
import CareerPointEditable from '../../components/careerPoint/careerPointEditable';
import CareerLabelEditable from '../../components/careerLabel/careerLabelEditable';


class signUp extends React.Component {

    constructor(props){
        super(props);
        this.careerPointsNode = [];
        this.characteristicsPointsNode = [];
        this.primarySkillsNode = [];
        this.secondarySkillsNode = [];
        this.state = {careerPoints: [<CareerPointEditable ref = {(careerPointsNode) => {this.careerPointsNode.push(careerPointsNode)}} />], 
                      characteristicsPoints: [(<CareerLabelEditable ref = {(characteristicsPointsNode) => {this.characteristicsPointsNode.push(characteristicsPointsNode)}} type = "characteristics" placeholder = "Who are you?" />)],
                      primarySkills: [],
                      secondarySkills: [],
                      email: "", password: "", bioTitle: "", bioText: ""  
                    };

    }

    addCareerPoint() {
        this.setState({careerPoints: [... this.state.careerPoints, <CareerPointEditable ref = {(careerPointsNode) => {this.careerPointsNode.push(careerPointsNode)}} />]})

    }

    removeCareerPoint() {
        let helpinghand = [... this.state.careerPoints]
        helpinghand.splice(helpinghand.length - 1, 1)
        this.setState({careerPoints: helpinghand})
    }

    addCharacteristicsPoint() {
        this.setState({characteristicsPoints: [... this.state.characteristicsPoints, <CareerLabelEditable ref = {(characteristicsPointsNode) => {this.characteristicsPointsNode.push(characteristicsPointsNode)}} type = "characteristics" placeholder = "Who are you?" />]})
    }

    addPrimarySkills() {
        this.setState({primarySkills: [... this.state.primarySkills, <CareerLabelEditable ref = {(primarySkillsNode) => {this.primarySkillsNode.push(primarySkillsNode)}} type = "primary" placeholder = "" />]})
    }

    addSecondarySkills() {
        this.setState({secondarySkills: [... this.state.secondarySkills, <CareerLabelEditable ref = {(secondarySkillsNode) => {this.secondarySkillsNode.push(secondarySkillsNode)}} type = "secondary" placeholder = "" />]})
    }

    handleBioTitleChange(e) {
        this.setState({bioTitle: e.target.value})
    }

    handleBioTextChange(e) {
        this.setState({bioText: e.target.value})
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    finishSignUp(response){
        if (response.data === "success"){
            window.location.href = "/profile/" + this.userName.state.text
        }else{
            alert(response.data)
        }
    }

    handleDataSend() {

        let dataToSend = {name: this.userName.state.text, mail: this.state.email, password: this.state.password, bioTitle: this.state.bioTitle, bioText: this.state.bioText, characteristics: {}, primarySkills: {}, secondarySkills: {}, careers: {}};

        for (let i = 0; i < this.state.characteristicsPoints.length; i++){
            dataToSend.characteristics["characteristicsPoint_" + i.toString()] = this.characteristicsPointsNode[i].state.text
        }

        for (let i = 0; i < this.state.primarySkills.length; i++){
            dataToSend.primarySkills["primarySkillsPoint_" + i.toString()] = this.primarySkillsNode[i].state.text
        }

        for (let i = 0; i < this.state.secondarySkills.length; i++){
            dataToSend.secondarySkills["secondarySkillsPoint_" + i.toString()] = this.secondarySkillsNode[i].state.text
        }

        for (let i = 0; i < this.state.careerPoints.length; i++){
            dataToSend.careers["careerPoint_" + i.toString()] = {type: this.careerPointsNode[i].state.type, name: this.careerPointsNode[i].state.careerName, time: this.careerPointsNode[i].state.careerTime, description: this.careerPointsNode[i].state.careerDescription}
        }

        console.log(dataToSend)

        axios
      .post("/SignUp", dataToSend)
      .then((res) => this.finishSignUp(res))
      .catch(err => console.log(err));

        

    }

    render(){
        return(
            <Container className = "UpgradedContainer">
                <Row className = "UpgradedRow">

                    <Col xl = {4} className = "sidebar">
                        <div className="photo">
                            <div className="photoText">You can upload your photo or avatar here</div>
                        </div>
                        <div className="userNameWrapper">
                            <CareerLabelEditable type = "name" placeholder = "What's your name?" ref = {(userName) => {this.userName = userName}} />
                        </div>
                        <div className="characteristicsWrapper">
                            <AnimateGroup>
                                {this.state.characteristicsPoints}
                            </AnimateGroup>
                            <div className="addCharacteristics" onClick = {() => this.addCharacteristicsPoint()} >
                                <img className="addIcon" src = {require("../../resources/addIcon_1.svg")} alt = "icon for add element" />
                            </div>
                        </div>
                        <h3 className = "primarySkillsTitle">What are your primary skills?</h3>
                        <div className="skillsWrapper">
                            <AnimateGroup>
                                {this.state.primarySkills}
                            </AnimateGroup>
                            <div className="addCharacteristics" onClick = {() => this.addPrimarySkills()} >
                                <img className="addIcon" src = {require("../../resources/addIcon_1.svg")} alt = "icon for add element" />
                            </div>
                        </div>
                        <h3 className = "secondarySkillsTitle">What are your secondary skills?</h3>
                        <div className="skillsWrapper">
                            <AnimateGroup>
                                {this.state.secondarySkills}
                            </AnimateGroup>
                            <div className="addCharacteristicsTwo" onClick = {() => this.addSecondarySkills()} >
                                <img className="addIcon" src = {require("../../resources/addIcon_2.svg")} alt = "icon for add element" />
                            </div>
                        </div>
                        <div className="signUpButtonWrapper">
                            <div className="signUpButton" onClick = {() => this.handleDataSend()} >Sign me up!</div>
                        </div>
                    </Col>
                    <Col xl = {8} className = "whitespace">

                        <form className="bioWrapper">
                            <input className="bioTitle" type = "text" placeholder = "Hello there.. Tell everybody something about you!" onChange = {(e) => this.handleBioTitleChange(e)} ></input>
                            <textarea className="bioText" type = "text" rows = "8" cols = "100" placeholder = "It can be your life story, funny accident that happend to you or a joke! Or you can describe yourself. Are you shy or talkative? Are you more of a team player or a lone wolf? What’s your favourite show? You can write anything about yourself here. Fusce quis nulla vestibulum nisi luctus pharetra sed et sem. Morbi consectetur lectus magna, ac bibendum libero porttitor sit amet. Mauris tincidunt bibendum libero ut pulvinar. Phasellus maximus lacus fringilla dolor dignissim pulvinar. Nullam quis metus justo. Aliquam nibh quam, aliquet ut quam at, aliquet placerat mi. General Kenobi. Phasellus maximus lacus fringilla dolor dignissim pulvinar. Phasellus maximus." onChange = {(e) => this.handleBioTextChange(e)} ></textarea >
                        </form>

                        <form className="loginCredentialsWrapper">
                            <input className="loginCredentials" type = "text" placeholder = "Write your email here" onChange = {(e) => this.handleEmailChange(e)} ></input>
                            <input className="loginCredentials" type = "password" placeholder = "And your password here" onChange = {(e) => this.handlePasswordChange(e)} ></input>
                        </form>

                        <AnimateGroup>
                            {this.state.careerPoints}
                        </AnimateGroup>

                        <div className="buttonWrapper">
                            <div className="addBackground" onClick = {() => this.addCareerPoint()} >
                                <img className="addIcon" src = {require("../../resources/addIcon.svg")} alt = "icon for add element" />
                            </div>
                            <div className="removeBackground" onClick = {() => this.removeCareerPoint()} >
                                <img className="removeIcon" src = {require("../../resources/removeIcon.svg")} alt = "icon for remove element" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }


}
export default signUp;