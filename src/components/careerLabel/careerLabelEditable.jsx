import React from 'react';
import ReactDOM from 'react-dom';
import { Animate } from 'react-animate-mount'
import './careerLabelEditable.scss';

class CareerLabelEditable extends React.Component {

    constructor(props){
        super(props);
        this.state = {text: ""}
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }

    render(){
            if (this.props.type === "name")
            {
                return(<input className="userName" type = "text" placeholder = {this.props.placeholder} onChange = {(e) => this.handleChange(e)}></input>)

            }else if (this.props.type === "characteristics")
            {
                return(<input className="characteristics" type = "text" placeholder = {this.props.placeholder} onChange = {(e) => this.handleChange(e)}></input>)

            }else if (this.props.type === "primary")
            {
                return(<input className="primary" type = "text" placeholder = {this.props.placeholder} onChange = {(e) => this.handleChange(e)}></input>)

            }else if (this.props.type === "secondary")
            {
                return(<input className="secondary" type = "text" placeholder = {this.props.placeholder} onChange = {(e) => this.handleChange(e)}></input>)

            }else{
                return null;
            }
        
    }

}
export default CareerLabelEditable;