import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './profile.scss';
import { Container, Row, Col } from 'react-grid-system';
import CareerPointFixed from '../../components/careerPoint/careerPointFixed';
import CareerLabelFixed from '../../components/careerLabel/careerLabelFixed';

class profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {name: "", bioText: "", bioTitle: "", characteristicsData: {}, primarySkillsData: {}, secondarySkillsData: {}, careersData: {}, characteristicsPoints: [], primarySkillsPoints: [], secondarySkillsPoints: [], careerPoints: []}
    }

    Update(res){
        this.setState({name: res.data.name, bioText: res.data.bioText, bioTitle: res.data.bioTitle, characteristicsData: res.data.characteristics, primarySkillsData: res.data.primarySkills, secondarySkillsData: res.data.secondarySkills, careersData: res.data.careers})

        let characteristics = []

        for (const [key, value] of Object.entries(this.state.characteristicsData)){
            characteristics = [... characteristics, <CareerLabelFixed type = "characteristics" text = {value}></CareerLabelFixed>]

            }
        this.setState({characteristicsPoints: characteristics})

        let primarySkills = []

        for (const [key, value] of Object.entries(this.state.primarySkillsData)){
            primarySkills = [... primarySkills, <CareerLabelFixed type = "primary" text = {value}></CareerLabelFixed>]

            }
        this.setState({primarySkillsPoints: primarySkills})

        let secondarySkills = []

        for (const [key, value] of Object.entries(this.state.secondarySkillsData)){
            secondarySkills = [... secondarySkills, <CareerLabelFixed type = "secondary" text = {value}></CareerLabelFixed>]

            }
        this.setState({secondarySkillsPoints: secondarySkills})

        let careerPoint = []

        for (const [key, value] of Object.entries(this.state.careersData)){
            careerPoint = [... careerPoint, <CareerPointFixed type = {value.type} careerTitle = {value.name} careerTime = {value.time} careerDes = {value.description}></CareerPointFixed>]
        }
        this.setState({careerPoints: careerPoint})
    }

    componentDidMount(){

        let dataToSend = {name: this.props.match.params.name}

        axios
      .post("/profile/post", dataToSend)
      .then(res => this.Update(res))
      .catch(err => console.log(err));
    }

    render(){
        return(
            <Container className = "UpgradedContainer">
                <Row className = "UpgradedRowProfile" style = {{alignItems: "stretch"}}>

                    <Col xl = {4} className = "sidebar">
                        <div className="photo">
                            <div className="photoText">This person doesn't have an avatar yet</div>
                        </div>
                        <div className="userNameWrapper">
                            <CareerLabelFixed type = "name" text = {this.state.name} />
                        </div>
                        <div className="characteristicsWrapper">

                            {this.state.characteristicsPoints}

                        </div>

                        <div className="skillsWrapper">

                            {this.state.primarySkillsPoints}

                        </div>

                        <div className="skillsWrapper">

                            {this.state.secondarySkillsPoints}

                        </div>
                    </Col>
                    <Col xl = {8} className = "whitespace">

                        <div className="bioWrapper">
                            <h2 className="bioTitle">{this.state.bioTitle}</h2>
                            <p className="bioText">{this.state.bioText}</p>
                        </div>

                        {this.state.careerPoints}

                        <img className = "pathIcon" alt = "icon for profile" src = {require("../../resources/pathIcon.svg")}></img>

                    </Col>
                </Row>
            </Container>
        )
    }

}
export default profile;