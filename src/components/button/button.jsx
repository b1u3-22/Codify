import React from 'react';
import ReactDOM from 'react-dom';
import './button.scss';

class Button extends React.Component {

    constructor(props){
        super(props)
        this.state = {color: this.props.color, size: this.props.size, text: this.props.text, backgroundStyle: {backgroundColor: this.props.color}, textStyle: {fontSize: this.props.size}}
        console.log(this.state.labeledStyle)
    }


    render(){

        return(
            <a className = "dest" href = {this.props.href}>
                <div className="background">
                    <p>{this.state.text}</p>
                </div>
            </a>
        )
    }

}
export default Button;