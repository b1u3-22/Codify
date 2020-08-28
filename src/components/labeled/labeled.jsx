import React from 'react';
import ReactDOM from 'react-dom';
import './labeled.scss';

class Labeled extends React.Component {

    constructor(props){
        super(props)
        this.state = {color: this.props.color, size: this.props.size, text: this.props.text, backgroundStyle: {backgroundColor: this.props.color}, textStyle: {fontSize: this.props.size}}
    }


    render(){

        return(
            <div className="background" style={this.state.backgroundStyle}>
                <p style={this.state.textStyle}>{this.state.text}</p>
            </div>
        )
    }

}
export default Labeled;