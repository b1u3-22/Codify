import React from 'react';
import './card.scss'

class Card extends React.Component{
    render(){
        return(
            <Card>
                <p>{this.props.text}</p>
            </Card>
        );
    }
}

export default Card;