import React from 'react';
import './LoginForm.scss';
import Button from '../Button/Button'

class LoginForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {loginStyle: {"border-color": "none"}, passwordStyle: {"border-color": "none"}, nickname: "", password: ""};
      }

    inputHandlererNickname(e){
        this.setState({nickname: e.target.value});
    }

    inputHandlererPassword(e){
        this.setState({password: e.target.value});
    }

    sendData() {
        fetch('https://b1u3-codify.herokuapp.com/LogInPost/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nickname: this.state.nickname,
                password: this.state.password
            })
        })
        console.log(this.state.nickname + " " + this.state.password)
    }

    render(){
        return(
            <div className = "frame">
                <div className = "big-wrapper">
                    <img src = {require('../resources/ProfileIconSmall.svg')} alt = "Icon for Log in form" />
                    <form>
                        <label for = "nickname">
                            Nickname or email
                        </label>
                        <input type = "text" id = "nickname" style = {this.state.loginStyle} onChange = {this.inputHandlererNickname} />
                        <label for = "password">
                            Password
                        </label>
                        <input type = "password" id = "password" style = {this.state.passwordStyle} onChange = {this.inputHandlererPassword} />

                    </form>
                </div>
                <div className = "button-wrapper">
                    <Button text = "Log in" onClick = {this.sendData}/>
                </div>
            </div>
        );
    }
}

export default LoginForm;