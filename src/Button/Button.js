import React from 'react';
import './Button.scss';

class Button extends React.Component{
    render(){
        return(
        <div className = "Button">
            <p>{this.props.text}</p>
        </div>
        );
    }
}

export default Button;