import React from 'react';
import ReactDOM from 'react-dom';
import './searchProfile.scss';

class SearchProfile extends React.Component {

    constructor(props){
        super(props)
        this.state = {characteristics: [], primarySkills: [], dest: ""}
    }

    componentDidMount(){

        let key_0 = 0;
        let key_1 = 0;
        let characteristicsHelper = []
        let primarySkillsHelper = []

        for (let i = 0; i < this.props.characteristics.length; i++){
            characteristicsHelper = [... characteristicsHelper, <p className = "characteristicsLabel" key = {key_0}>{this.props.characteristics[i]}</p>]
            key_0++;
        }

        for (let i = 0; i < this.props.primarySkills.length; i++){
            primarySkillsHelper = [... primarySkillsHelper, <p className = "primarySkillsLabel" key = {key_1}>{this.props.primarySkills[i]}</p>]
            key_1++;
        }

        this.setState({characteristics: characteristicsHelper, primarySkills: primarySkillsHelper, dest: "/profile/" + this.props.name})
    }


    render(){

        return(
            <a className = "dest" href = {this.state.dest}><div className="searchProfileWrapper">
                <div className="circle" />
                <div className="searchProfileTextWrapper">
                    <p className="name">{this.props.name}</p>
                    <div className="additionalTextWrapper">
                        {this.state.characteristics}
                    </div>
                    <div className="additionalTextWrapper">
                        {this.state.primarySkills}
                    </div>
                </div>
            </div></a>
        )
    }

}
export default SearchProfile;