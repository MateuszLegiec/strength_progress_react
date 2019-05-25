import React, {Component} from "react";
import {isEmailValid, isPasswordValid} from "../../../validation";
import {invalidEmailMessage, invalidPasswordMessage} from "../../../messages";

const initialState = {
    newEmail: "",
    newEmailError: "",
    password: "",
    passwordError: ""
};

export default class NewEmailForm extends Component{

    state = initialState;

    validate = () => {
        let emailError = isEmailValid(this.state.newEmail)?"":invalidEmailMessage;
        let passwordError = isPasswordValid(this.state.password)?"":invalidPasswordMessage;

        if (emailError || passwordError){
            this.setState({emailError,passwordError});
            return false;
        }

        return true;
    };

    onSubmit = e => {
        e.preventDefault();
        let isValid = this.validate();
        if(isValid){
            let newEmailForm = {
                userId: this.props.userId,
                newEmail: this.state.newEmail,
                password: this.state.password,
            };
            console.log(JSON.stringify(newEmailForm));
            this.setState(initialState);
            this.props.onUpdateUser();
        }
    };

    render(){
        return (
            <section>
                <form>
                    <h1>Change email</h1>
                    <label htmlFor="newEmail">New email<br/><input type="text" name="newEmail" className="form-control" value={this.state.newEmail} onChange={e => this.setState({newEmail: e.target.value})}/></label>
                    <div className="text-danger">{this.state.newEmailError}</div>
                    <label htmlFor="passwordToChangeEmail">Password<br/><input type="password" className="form-control" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/></label>
                    <div className="text-danger">{this.state.passwordError}</div>
                    <input type="submit" value="Change email" className="btn border-secondary btn-light" onClick={e => this.onSubmit(e)}/>
                </form>
            </section>
        )
    }

}