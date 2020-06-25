import React from 'react';
import axios from 'axios';
import './SignupForm.scss';
import Button from '../Button/Button'

class SignupForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {nicknameStyle: {"borderColor": "none"},
                      emailStyle: {"borderColor": "none"},
                      firstName: "", 
                      lastName: "",
                      nickname: "", 
                      email: "",
                      password: "", 
                      developer: false, 
                      ATOS: false,
                    };

        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName  = this.setLastName.bind(this);
        this.setNickname  = this.setNickname.bind(this);
        this.setEmail     = this.setEmail.bind(this);
        this.setPassword  = this.setPassword.bind(this);
        this.setDeveloper = this.setDeveloper.bind(this);
        this.setATOS      = this.setATOS.bind(this);
        this.sendData     = this.sendData.bind(this);
      }

    setFirstName(e){
        this.setState({firstName: e.target.value});
    }

    setLastName(e){
        this.setState({lastName: e.target.value});
    }

    setNickname(e){
        this.setState({nickname: e.target.value});
    }

    setEmail(e){
        this.setState({email: e.target.value});
    }

    setPassword(e){
        this.setState({password: e.target.value});
    }

    setDeveloper(e){
        if (this.state.developer){
            this.setState({developer: false});
        }else{
            this.setState({developer: true});
        }
    }

    setATOS(e){
        if (this.state.ATOS){
            this.setState({ATOS: false});
        }else{
            this.setState({ATOS: true});
        }
    }
    

    sendData() {
        console.log(this.state.firstName + " " + this.state.lastName + " " + this.state.nickname + " " + this.state.email + " " + this.state.password + " " + this.state.developer + " " + this.state.ATOS);
        // let data = {firstName: this.state.firstName, lastName: this.state.lastName, nickname: this.state.nickname, email: this.state.email, password: this.state.password, developer: this.state.developer, ATOS: this.state.ATOS};

        axios.post('/post/signup', {boo: "foo"});

    }


    render(){
            return (
                <form>
                    <label htmlFor = "firstname">
                        First name
                    </label>
                    <input type = "text" id = "firstname" value = {this.state.firstName} onChange = {this.setFirstName} />

                    <label htmlFor = "lastname">
                        Last name
                    </label>
                    <input type = "text" id = "lastname" value = {this.state.lastName} onChange = {this.setLastName} />

                    <label htmlFor = "nickname">
                        Nickname
                    </label>
                    <input type = "text" id = "nickname" style = {this.state.nicknameStyle} value = {this.state.nickname} onChange = {this.setNickname} />

                    <label htmlFor = "email">
                        Email
                    </label>
                    <input type = "email" id = "email" style = {this.state.emailStyle} value = {this.state.email} onChange = {this.setEmail} />

                    <label htmlFor = "password">
                        Password
                    </label>
                    <input type = "password" id = "password" value = {this.state.password} onChange = {this.setPassword} />

                    <div className = "checkbox-wrapper">
                        <label className = "checkbox-container">
                            <input type = "checkbox" onClick = {this.setDeveloper} />
                            <div className = "checkmark" />
                            I'm developer
                        </label>
                        <label className = "checkbox-container">
                            <input type = "checkbox" onClick = {this.setATOS} />
                            <div className = "checkmark" />
                            I accept the terms of service
                        </label>
                    </div>
                    <div className = "button-wrapper">
                        <div className = "button-container-1">
                            <Button text = "Sign me up!" onClick = {this.sendData} />
                        </div>
                        <div className = "button-container-2">
                            <Button text = "Log in instead" dst = "/LogIn" />
                        </div>
                    </div>
                </form>
            );
        
    }
}

export default SignupForm;