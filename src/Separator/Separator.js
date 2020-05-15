import React from 'react';
import './Separator.scss';

class Separator extends React.Component {
    render(){
        return(
            <div className = "Separator" style = "width: {this.props.lenght}"></div>
        );
    }
}

// This component is not finished yet. It's not in use and it **can't** be used right now.