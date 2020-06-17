import React from 'react';
import './SignupForm.scss';
import Button from '../Button/Button'

class SignupForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {nicknameStyle: {"border-color": "none"}, emailStyle: {"border-color": "none"}, firstName: "", LastName: "", nickname: "", email: "", password: "", developer: false, ATOS: false}
      }

    inputHandlerer(label, e){
        switch(label){
            case "firstname":
                this.setState({firstName: e.target.value});
                break;

            case "lastname":
                this.setState({LastName: e.target.value});
                break;

            case "nickname":
                this.setState({nickname: e.target.value});
                break;

            case "email":
                this.setState({email: e.target.value});
                break;

            case "password":
                this.setState({password: e.target.value})
                break;

            case "developer":
                if (this.state.developer){
                    this.setState({developer: false});
                }else{
                    this.setState({developer: true});
                }
                break;

            case "ATOS":
                if (this.state.ATOS){
                    this.setState({ATOS: false});
                }else{
                    this.setState({ATOS: true});
                }
                break;

            default: 
                console.log("Nothing changed")
                break;
          }
      }

    sendData() {
        fetch('https://b1u3-codify.herokuapp.com/SignUpPost/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                LastName:  this.state.LastName,
                nickname:  this.state.nickname,
                email:     this.state.email,
                password:  this.state.password,
                nickname:  this.state.developer,
                ATOS:      this.state.ATOS
            })
        })

        console.log(this.state.firstName + " " + this.state.LastName + " " + this.state.nickname + " " + this.state.email + " " + this.state.password + " " + this.state.developer + " " + this.state.ATOS)
    }

    render(){
            return (
                <form>
                    <label for = "firstname">
                        First name
                    </label>
                    <input type = "text" id = "firstname" onChange = {this.inputHandlerer("firstname")} />

                    <label for = "lastname">
                        Last name
                    </label>
                    <input type = "text" id = "lastname" onChange = {this.inputHandlerer("lastname")} />

                    <label for = "nickname">
                        Nickname
                    </label>
                    <input type = "text" id = "nickname" style = {this.state.nicknameStyle} onChange = {this.inputHandlerer("nickname")} />

                    <label for = "email">
                        Email
                    </label>
                    <input type = "email" id = "email" style = {this.state.emailStyle} onChange = {this.inputHandlerer("email")} />

                    <label for = "password">
                        Password
                    </label>
                    <input type = "password" id = "password" onChange = {this.inputHandlerer("password")} />

                    <div className = "checkbox-wrapper">
                        <label className = "checkbox-container">
                            <input type = "checkbox"  onChange = {this.inputHandlerer("developer")} />
                            <div className = "checkmark" />
                            I'm developer
                        </label>
                        <label className = "checkbox-container">
                            <input type = "checkbox" onChange = {this.inputHandlerer("ATOS")} />
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