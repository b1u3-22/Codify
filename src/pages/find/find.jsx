import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './find.scss';
import LogIn from "../../components/logIn/logIn"
import Button from '../../components/button/button'
import SearchProfile from '../../components/searchProfile/searchProfile'
import { Container, Row, Col } from 'react-grid-system';
import { AnimateGroup } from 'react-animate-mount'
import PostPointEditable from '../../components/postPoint/postPointEditable';
import PostPointFixed from '../../components/postPoint/postPointFixed';

class find extends React.Component {

    constructor(props){
        super(props);
        this.state = {loggedIn: window.sessionStorage.getItem("loggedIn"), loggedUser: window.sessionStorage.getItem("loggedUser"), logInStyle: {display: "none"}, allPosts: [], searchResults: [], buttonSection: [], postPointEditableStyle: {display: "none"}}
    }

    componentWillMount(){

        if (this.state.loggedIn) {
            this.setState({buttonSection: [<Button text = "My Profile" href = {"/profile/" + this.state.loggedUser} />,
                                           <span onClick = {() => this.handlePost()} ><Button text = "Post" /></span>]})
        }else{
            this.setState({buttonSection: [<span onClick = {() => this.handleLogIn()}><Button text = "Log In" /></span>]})
        }

        let dataToSend = {posts: "all"}

        axios
        .post("/getAllPosts", dataToSend)
        .then((res) => this.updatePostResults(res))
        .catch(err => console.log(err));

    }

    updatePostResults(response){

        let data = response.data;

        for (const [key, value] of Object.entries(data)){
            this.setState({allPosts: [... this.state.allPosts, <PostPointFixed title = {value.title} text = {value.text} author = {value.author} time = {value.time} />]})
        }
    }

    updateSearchResults(response){
        let data = response.data;
        let name = "";
        let characteristics = [];
        let primarySkills = [];
        let key_0 = 0;

        this.setState({searchResults: []});

        for (const [key, value] of Object.entries(data)){
            name = value.name

            for (const [key_of_key, value_of_value] of Object.entries(value.characteristics)){
                characteristics.push(value_of_value)
            }

            for (const [key_of_key, value_of_value] of Object.entries(value.primarySkills)){
                primarySkills.push(value_of_value)
            }
            this.setState({searchResults: [... this.state.searchResults, (<SearchProfile key = {key_0} name = {name} characteristics = {characteristics} primarySkills = {primarySkills} />)]})
            key_0 ++;
            characteristics = []
            primarySkills = []
        }

    }

    handleLogIn(){
        this.logInRef.setState({backgroundStyle: {display: "flex"}})

        // TODO 
        // get rid of setInterval and come up with better solution
        // TODO 
        // also get rid of window.location.reload

        let logInInterval = setInterval(() => {
            if (window.sessionStorage.getItem("loggedIn")){
                window.location.reload();
                clearInterval(logInInterval)
            }
        }, 100);
    }

    handleSearch(e){

        if (e.target.value !== ""){
            axios
        .post("/search", {name: e.target.value})
        .then((res) => this.updateSearchResults(res))
        .catch(err => console.log(err))
        }else{
            this.setState({searchResults: []})
        }
    }

    handlePost(){
        this.postPointEditableRef.setState({postPointEditableStyle: {display: "flex"}})
        this.postPointEditableRef.setState({sent: false})
        // TODO 
        // get rid of setInterval and come up with better solution
        // TODO 
        // also get rid of window.location.reload

        let logInInterval = setInterval(() => {
            if (this.postPointEditableRef.state.sent){
                window.location.reload();
                clearInterval(logInInterval)
            }
        }, 100);
    }
   

    render(){
        return(
            <Container className = "UpgradedContainer">
                <LogIn logInStyle = {this.state.logInStyle} ref = {(logIn) => {this.logInRef = (logIn)}}/>
                <Row className = "UpgradedRow">
                    <Col className = "UpgradedCol" xl = {3}>
                        <Button text = "About page" href = "/" />
                    </Col>
                    <Col className = "UpgradedCol" xl = {6}>
                        <input className = "searchBar" type = "text" placeholder = "Who are you looking for?" onChange = {(e) => this.handleSearch(e)}></input>
                    </Col>
                    <Col className = "UpgradedCol" xl = {3}>
                        {this.state.buttonSection}
                    </Col>
                </Row>
                <Row className = "UpgradedRow">
                    <Col xl = {5} className = "searchResultsWrapper">
                        <AnimateGroup>
                            {this.state.searchResults}
                        </AnimateGroup>
                    </Col>
                </Row>
                <Row className="UpgradedRow">
                    <Col xl = {7}>
                        <PostPointEditable author = {this.state.loggedUser} postPointEditableStyle = {this.state.postPointEditableStyle} ref = {(postPointEditable) => {this.postPointEditableRef = (postPointEditable)}} />
                    </Col>
                </Row>
                <Row className="UpgradedRow">
                    <Col xl = {7}>
                        {this.state.allPosts}
                    </Col>
                </Row>
                <Row className = "UpgradedRow">
                    <Col xl = {5}>
                        <img alt = "icon for end of feed" src = {require("../../resources/endOfFeedIcon.svg")} className = "endOfTheFeedIcon"></img>
                    </Col>
                </Row>
            </Container>
        )
    }

}
export default find;