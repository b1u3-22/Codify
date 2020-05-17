import React from 'react';
import './Form.scss';
import Button from '../Button/Button'

class Form extends React.Component{

    render(){
        if (this.props.type === "signup"){
            return (
                <form>
                    <label for = "firstname">
                        First name
                    </label>
                    <input type = "text" id = "firstname" />

                    <label for = "lastname">
                        Last name
                    </label>
                    <input type = "text" id = "lastname" />

                    <label for = "nickname">
                        Nickname
                    </label>
                    <input type = "text" id = "nickname" />

                    <label for = "email">
                        Email
                    </label>
                    <input type = "email" id = "email" />

                    <label for = "password">
                        Password
                    </label>
                    <input type = "password" id = "password" />

                    <div className = "checkbox-wrapper">
                        <label className = "checkbox-container">
                            <input type = "checkbox" />
                            <div className = "checkmark" />
                            I'm developer
                        </label>
                        <label className = "checkbox-container">
                            <input type = "checkbox" />
                            <div className = "checkmark" />
                            I accept the terms of service
                        </label>
                    </div>

                    <div className = "button-wrapper">
                        <div className = "button-container-1">
                            <Button text = "Sign me up!"/>
                        </div>
                        <div className = "button-container-2">
                            <Button text = "Log in instead" dst = "/LogIn" />
                        </div>
                    </div>

                </form>
            );
        }
    }
}

export default Form;