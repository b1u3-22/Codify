import React from 'react';
import ReactDOM from 'react-dom';
import { Animate } from 'react-simple-animate'
import './careerPointFixed.scss';

class CareerPointFixed extends React.Component {

    constructor(props){
        super(props)
        this.state = {type: "", iconDestination: require("../../resources/jobIcon.svg")}
    }

    componentDidMount(){
        if (this.props.type == "school"){
            this.setState({type: "school", iconDestination: require("../../resources/schoolIcon.svg")})
        } else {
            this.setState({type: "job", iconDestination: require("../../resources/jobIcon.svg")})
        }

        console.log(this.state.iconDestination)
        console.log(this.state.type)
    }

    render(){

        return(
            <div className="careerPointWrapper">
                <img className="icon" src={this.state.iconDestination} alt="icon for career point element"></img>
                <div className="textWrapper">
                    <h1 className="careerTitle" type = "text" placeholder = "What was the full name of a job or school?">{this.props.careerTitle}</h1>
                    <h2 className="careerTime" type = "text" placeholder = "How long have you been there?">{this.props.careerTime}</h2>
                    <h3 className="careerDescription" type = "text" placeholder = "Tell us something about it">{this.props.careerDes}</h3>
                </div>
            </div>
        )
    }
}

export default CareerPointFixed;