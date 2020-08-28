import React from 'react';
import ReactDOM from 'react-dom';
import { Animate } from 'react-simple-animate'
import './careerPointEditable.scss';

class CareerPointEditable extends React.Component {

    constructor(props){
        super(props)
        this.state = {type: "school", iconDestination: require("../../resources/schoolIcon.svg"), careerName: "", careerTime: "", careerDescription: ""}
    }

    changeType(){
        console.log(this.state.type)

        if (this.state.type === "school"){
            this.setState({type: "job"})
            this.setState({iconDestination: require("../../resources/jobIcon.svg")})
        }else{
            this.setState({type: "school"})
            this.setState({iconDestination: require("../../resources/schoolIcon.svg")})
        }
    }

    setTitle(e){
        this.setState({careerName: e.target.value})
    }

    setTime(e){
        this.setState({careerTime: e.target.value})
    }

    setDescription(e){
        this.setState({careerDescription: e.target.value})
    }

    render(){

        return(
            <div className="careerPointWrapper">
                <img className="icon" src={this.state.iconDestination} alt="icon for career point element" onClick = {() => this.changeType()}></img>
                <form className="textWrapper">
                    <input className="careerTitle" type = "text" placeholder = "What was the full name of a job or school?" onChange = {(e) => this.setTitle(e)}></input>
                    <input className="careerTime" type = "text" placeholder = "How long have you been there?" onChange = {(e) => this.setTime(e)}></input>
                    <input className="careerDescription" type = "text" placeholder = "Tell us something about it" onChange = {(e) => this.setDescription(e)}></input>
                </form>
            </div>
        )
    }
}

export default CareerPointEditable;