import React from 'react';
import './Card.scss'

class Card extends React.Component{
    render(){
        
        if (this.props.imgloc === 'top')
            return(
                <div className = 'Card'>
                    <img src = {this.props.imgsrc} alt = 'Icon for card element'></img>
                    <p>{this.props.text}</p>
                </div>
            );
    }
}

export default Card;