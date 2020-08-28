import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './postPointEditable.scss';
import Button from '../button/button';

class PostPointEditable extends React.Component {

    constructor(props){
        super(props)
        this.state = {title: "", text: "", postPointEditableStyle: {display: "none"}, author: this.props.author, sent: false}
    }

    handleTitleChange(e){
        this.setState({title: e.target.value})
    }

    handleTextChange(e){
        this.setState({text: e.target.value})
    }

    handlePost(){
        

        let dataToSend = {title: this.state.title, text: this.state.text, author: this.state.author}

        axios
        .post("/post", dataToSend)
        .then((res) => this.update(res))
        .catch(err => console.log(err))
        this.setState({postPointEditableStyle: {display: "none"}, sent: true})
    }

    handleCancel(){
        this.setState({postPointEditableStyle: {display: "none"}})
    }

    render(){

        return(
            <form className="postPointEditableWrapper" style = {this.state.postPointEditableStyle}>
                <input className="postPointEditableTitle" type = "text" placeholder = "What do you have in mind?" onChange = {(e) => this.handleTitleChange(e)} />
                <textarea className="postPointEditableText" type = "text" placeholder = "Try to describe it to others!" rows = "21" cols = "100" onChange = {(e) => this.handleTextChange(e)} />
                <div className="postPointEditableButtonWrapper">
                    <span onClick = {() => this.handleCancel()} ><Button text = "Cancel" /></span>
                    <span onClick = {() => this.handlePost()} ><Button text = "Post" /></span>
                </div>
            </form>
        )
    }

}
export default PostPointEditable;