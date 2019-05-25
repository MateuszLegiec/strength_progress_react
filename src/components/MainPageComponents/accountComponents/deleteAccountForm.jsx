import React, {Component} from "react";
import {isPasswordValid, isRepeatedPasswordSame} from "../../../validation";
import {invalidPasswordMessage, invalidRepeatedPasswordMessage} from "../../../messages";

const initialState = {
    password: "",
    passwordError: "",
    repeatedPassword: "",
    repeatedPasswordError: ""
};

export default class DeleteAccountForm extends Component{

    state = initialState;

    validate = () => {
        let passwordError = isPasswordValid(this.state.password)?"":invalidPasswordMessage;
        let repeatedPasswordError = isRepeatedPasswordSame(this.state.repeatedPassword)?"":invalidRepeatedPasswordMessage;

        if(passwordError || repeatedPasswordError){
            this.setState({passwordError,repeatedPasswordError});
            return false;
        }
        return true;
    };

    change = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();
        let isValid = this.validate();
        if(isValid){
            let deleteUserForm = {
                userId: this.props.userId,
                password: this.state.password,
                repeatedPassword: this.state.repeatedPassword
            };
            console.log(JSON.stringify(deleteUserForm));
            this.setState(initialState);
            this.props.onDeleteUser();
        }
    };

    render(){
        return (
            <section>
                <h1 className="text-danger">Delete account</h1>
                <label htmlFor="passwordToDeleteUser">Password<br/><input name="password" type="password" id="passwordToDeleteUser" className="form-control"  onChange={e => this.change(e)}/></label>
                <div className="text-danger">{this.state.passwordError}</div>
                <label htmlFor="repeatedPassword">Confirm password<br/><input name="repeatedPassword" type="password" id="repeatedPassword" className="form-control"  onChange={e => this.change(e)}/></label><br/>
                <div className="text-danger">{this.state.repeatedPasswordError}</div>
                <h5 className="text-danger">You are about to permanently delete your account.<br/>After pressing the button you won`t be able to retrieve any of the content or information you have added.</h5>
                <input className="btn btn-danger" type="submit" value="Delete your account" onClick={e => this.onSubmit(e)}/>
            </section>
        );
    };



}