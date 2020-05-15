import React from 'react';
import './Separator.scss';

class Separator extends React.Component {

    render(){

        if (this.props.size === "small"){

            let divStyle = {
                width: "20vw"
            };

            return(
                <div className = "Separator" style = {divStyle}></div>
            );
        }
        else if (this.props.size === "medium"){

            let divStyle = {
                width: "45vw"
            };

            return(
                <div className = "Separator" style = {divStyle}></div>
            );
        }
        else if (this.props.size === "large"){

            let divStyle = {
                width: "70vw"
            };

            return(
                <div className = "Separator" style = {divStyle}></div>
            );
        }
    }
}

export default Separator;

// This component is not finished yet. It's not in use and it **can't** be used right now.