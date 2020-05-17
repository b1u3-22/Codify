import React from 'react';
import './Button.scss';

class Button extends React.Component{
    render(){

        return(
        <a href = {this.props.dst}><div className = "Button" onMouseOver = {this.onHover}>
            <p>{this.props.text}</p>
        </div></a>
        );
    }
}

export default Button;