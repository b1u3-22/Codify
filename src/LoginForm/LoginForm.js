import React from 'react';
import './LoginForm.scss';
import Button from '../Button/Button'

class LoginForm extends React.Component{
    render(){
        return(
            <div className = "frame">
                <div className = "big-wrapper">
                    <img src = {require('../resources/ProfileIconSmall.svg')} alt = "Icon for Log in form" />
                    <form>
                        <label for = "nickname">
                            Nickname or email
                        </label>
                        <input type = "text" id = "nickname" />
                        <label for = "password">
                            Password
                        </label>
                        <input type = "password" id = "password" />

                    </form>
                </div>
                <div className = "button-wrapper">
                    <Button text = "Log in" />
                </div>
            </div>
        );
    }
}

export default LoginForm;