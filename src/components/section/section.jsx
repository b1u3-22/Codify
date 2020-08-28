import React from 'react';
import ReactDOM from 'react-dom';
import './section.scss';
import { Container, Row, Col } from 'react-grid-system';

class Section extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.mainContentOrientation === "left"){
            return(
                <Container>
                    <Row className = "UpgradedRow">
                        <Col xl = {6}>
                            <img className="icon" src = {this.props.img} alt = "Icon for section"></img>
                        </Col>
                        <Col xl = {1} />
                        <Col xl = {5}>
                            <div className="mainContentWrapper">
                                <h1 className = "sectionTitle">{this.props.title}</h1>
                                <p className = "sectionText">{this.props.text}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }else{
            return(
                <Container>
                    <Row className = "UpgradedRow">
                        <Col xl = {5}>
                            <div className="mainContentWrapper">
                                <h1 className = "sectionTitle">{this.props.title}</h1>
                                <p className = "sectionText">{this.props.text}</p>
                            </div>
                        </Col>
                        <Col xl = {1} />
                        <Col xl = {6}>
                            <img className="icon" src = {this.props.img} alt = "Icon for section"></img>
                        </Col>
                    </Row>
                </Container>
            )
        }
    }

}

export default Section;