import React, {Component} from "react";
import {isIdentityValid, isPasswordValid,} from "../../validation";
import {invalidIdentityMessage, invalidPasswordMessage} from "../../messages";

const initialState = {
    identity: "",
    identityError: "",
    password: "",
    passwordError: ""
};

export default class LoginForm extends Component{

    state = initialState;

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

     validate = () => {
       let identityError = isIdentityValid(this.state.identity)?"":invalidIdentityMessage;
       let passwordError = isPasswordValid(this.state.password)?"":invalidPasswordMessage;

       if(identityError || passwordError){
           this.setState({identityError,passwordError});
           return false;
       }
       return true;
     };

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let loginForm = {
              identity: this.state.identity,
              password: this.state.password
            };
            console.log(JSON.stringify(loginForm));
            this.setState(initialState);
            this.props.onSignIn({
                id: 1,
                username: "testUsername",
                email: "testEmail",
                date: "01.01.2001",
                bodyWeight: "90",
                wilks: "360",
                total: "500",
            });
        }
    };

    render(){
        return (
            <form name="LoginForm" method="post">
            <label className="text-white" htmlFor="identity">Username or email address:<br/>
                <input
                    className="form-control-lg"
                    type="text"
                    name="identity"
                    placeholder="username/email@example.com"
                    value={this.state.identity}
                    onChange={e => this.change(e)}/>
            </label>
                <div className="text-danger">{this.state.identityError}</div>
            <label className="text-white" htmlFor="password">Password:<br/>
            <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={e => this.change(e)}
            /><br/></label>
                <div className="text-danger">{this.state.passwordError}</div>
            <input
                type="submit"
                name="SignIn"
                className="btn bg-white btn-lg text-dark"
                value="Sign in"
                onClick={e => this.onSubmit(e)}
            />
            </form>
)
};


}

