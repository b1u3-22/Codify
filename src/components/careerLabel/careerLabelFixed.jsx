import React from 'react';
import ReactDOM from 'react-dom';
import { Animate } from 'react-animate-mount'
import './careerLabelFixed.scss';

class CareerLabelFixed extends React.Component {

    constructor(props){
        super(props);
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }

    render(){
            if (this.props.type === "name")
            {
            return(<div className="userName">{this.props.text}</div>)

            }else if (this.props.type === "characteristics")
            {
                return(<div className="characteristics">{this.props.text}</div>)

            }else if (this.props.type === "primary")
            {
                return(<div className="primary">{this.props.text}</div>)

            }else if (this.props.type === "secondary")
            {
                return(<div className="secondary">{this.props.text}</div>)

            }else{
                return null;
            }
        
    }

}
export default CareerLabelFixed;