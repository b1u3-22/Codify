import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './logIn.scss';

class LogIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {backgroundStyle: {display: "none"}, userName: "", password: ""};
    }

    update(response){

        let data = response.data;

        if (data == "success"){
            window.sessionStorage.setItem("loggedIn", true);
            window.sessionStorage.setItem("loggedUser", this.state.userName);
            this.setState({backgroundStyle: {display: "none"}});
            this.forceUpdate();

        }else{
            alert(data)
        }
    }

    handleCancel(){
        this.setState({backgroundStyle: {display: "none"}});
    }

    handleLogIn(){
        let dataToSend = {name: this.state.userName, password: this.state.password};

        axios
        .post("/logIn", dataToSend)
        .then((res) => this.update(res))
        .catch(err => console.log(err));

    }

    handleUserNameChange(e){
        this.setState({userName: e.target.value});
    }

    handleUserPasswordChange(e){
        this.setState({password: e.target.value});
    }


    render(){

        return(
            <div className="logInBackground" style = {this.state.backgroundStyle}>
                <div className="logInWrapper">
                    <div className="logInCircle" />
                    <input className="logInInput" placeholder = "Username" onChange = {(e) => this.handleUserNameChange(e)} />
                    <input className="logInInput" type = "password" placeholder = "Password" onChange = {(e) => this.handleUserPasswordChange(e)} />
                    <div className="logInTextLabel" onClick = {() => this.handleLogIn()}>Log In</div>
                    <a><div className="logInTextLabel">Sign Up Instead</div></a>
                    <div className="logInTextLabel" onClick = {() => this.handleCancel()}>Cancel</div>
                </div>
            </div>
        )
    }

}
export default LogIn;