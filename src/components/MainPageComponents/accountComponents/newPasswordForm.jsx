import React, {Component} from "react";
import { isPasswordValid, isRepeatedPasswordSame} from "../../../validation";
import {invalidPasswordMessage, invalidRepeatedPasswordMessage} from "../../../messages";

let initialState = {
    password:"",
    passwordError:"",
    newPassword:"",
    newPasswordError:"",
    newRepeatedPassword:"",
    newRepeatedPasswordError:"",
};

export default class NewPasswordForm extends Component{

    state = initialState;

    validate = () => {
        let passwordError = isPasswordValid(this.state.password)?"":invalidPasswordMessage;
        let newPasswordError = isPasswordValid(this.state.newPassword)?"":invalidPasswordMessage;
        let newRepeatedPasswordError = isRepeatedPasswordSame(this.state.newRepeatedPassword)?"":invalidRepeatedPasswordMessage;

        if (passwordError || newPasswordError || newRepeatedPasswordError){
            this.setState({passwordError,newPasswordError,newRepeatedPasswordError});
            return false;
        }

        return true;
    };

    onSubmit = e => {
        e.preventDefault();
        let isValid = this.validate();
        if(isValid){
            let newPasswordForm = {
                userId: this.props.userId,
                password: this.state.password,
                newPassword: this.state.newPassword,
                newRepeatedPassword: this.state.newRepeatedPassword
            };
            console.log(JSON.stringify(newPasswordForm));
            this.setState(initialState);
            this.props.onUpdateUser();
        }

    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        return (
            <section>
                <form>
                    <h1>Change password</h1>
                    <label htmlFor="oldPassword">Old password<br/><input type="password" value={this.state.password} className="form-control" onChange={e => this.change(e)}/></label>
                    <div className="text-danger">{this.state.password}</div>
                    <label htmlFor="newPassword">New password<br/><input type="password" value={this.state.newPassword} className="form-control" onChange={e => this.change(e)}/></label><br/>
                    <div className="text-danger">{this.state.repeatedPassword}</div>
                    <label htmlFor="repeatedNewPassword">Confirm new password<br/><input type="password" value={this.state.newRepeatedPassword} className="form-control" onChange={e => this.change(e)}/></label><br/>
                    <div className="text-danger">{this.state.newRepeatedPassword}</div>
                    <input type="submit" value="Change password" className="btn border-secondary btn-light"/>
                </form>
            </section>
        )
    }
}