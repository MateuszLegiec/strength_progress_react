import React, {Component} from "react";
import '../../styles/basicStyle.css'
import '../../styles/gettingStartedStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGenderless,
    faMars,
    faVenus
} from "@fortawesome/free-solid-svg-icons"
import {
    isUsernameValid,
    isPasswordValid,
    isBodyWeightValid,
    isDateOfBirthValid,
    isRepeatedPasswordSame,
    isEmailValid
} from "../../validation";
import {
    invalidBodyWeightMessage,
    invalidDateOfBirthMessage,
    invalidEmailMessage,
    invalidPasswordMessage,
    invalidRepeatedPasswordMessage,
    invalidUsernameMessage,
    validRegistrationMessage
} from "../../messages";

const initialState = {
    username: "",
    usernameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    repeatedPassword: "",
    repeatedPasswordError: "",
    dateOfBirth: "",
    dateOfBirthError: "",
    bodyWeight: "",
    bodyWeightError: "",
    gender: "female",
    correctValidation: ""
};

export default class SignUp extends Component{

    state = initialState;

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let usernameError = isUsernameValid(this.state.username)?"":invalidUsernameMessage;
        let emailError = isEmailValid(this.state.email)?"":invalidEmailMessage;
        let passwordError = isPasswordValid(this.state.password)?"":invalidPasswordMessage;
        let repeatedPasswordError = isRepeatedPasswordSame(this.state.password,this.state.repeatedPassword)?"":invalidRepeatedPasswordMessage;
        let dateOfBirthError = isDateOfBirthValid(this.state.dateOfBirth)?"":invalidDateOfBirthMessage;
        let bodyWeightError = isBodyWeightValid(this.state.bodyWeight)?"":invalidBodyWeightMessage;

        if (usernameError || emailError || passwordError || repeatedPasswordError || dateOfBirthError || bodyWeightError){
            this.setState({usernameError,emailError,passwordError,repeatedPasswordError,dateOfBirthError,bodyWeightError});
            return false;
        }
        return true;
    };

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let registrationForm = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                repeatedPassword: this.state.repeatedPassword,
                dateOfBirth: this.state.dateOfBirth,
                bodyWeight: this.state.bodyWeight,
                gender: this.state.gender
            };
            console.log(JSON.stringify(registrationForm));
            this.setState(initialState);
            this.setState({correctValidation: validRegistrationMessage});
        }
    };

    render(){
        return  <section id="registration">
                    <h1>STRENGTH PROGRESS</h1>
                    <h4 className="text-white">Everything you should know about progress in your main lifts</h4>
                    <h5 className="text-success">{this.state.correctValidation}</h5>
                    <form method="post" name="RegistrationForm">
                        <label htmlFor="username">Username:</label><br/>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            value={this.state.username}
                            onChange={e => this.change(e)}
                        />
                        <div className="text-danger">{this.state.usernameError}</div>
                        <label htmlFor="email">Email address:</label><br/>
                        <input
                            type="text"
                            name="email"
                            placeholder="email.example.com"
                            value={this.state.email}
                            onChange={e => this.change(e)}
                        />
                        <div className="text-danger">{this.state.emailError}</div>
                        <label htmlFor="password">Password:</label><br/>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={e => this.change(e)}
                        />
                        <div className="text-danger">{this.state.passwordError}</div>
                        <label htmlFor="repeatedPassword">Repeat password:</label><br/>
                        <input
                            type="password"
                            name="repeatedPassword"
                            placeholder="repeated password"
                            value={this.state.repeatedPassword}
                            onChange={e => this.change(e)}
                        />
                        <div className="text-danger">{this.state.repeatedPasswordError}</div>
                        <label htmlFor="dateOfBirth">Date of birth:</label><br/>
                        <input
                            id="registrationDateOfBirth"
                            type="date"
                            name="dateOfBirth"
                            placeholder="01.01.2000"
                            required="required"
                            value={this.state.dateOfBirth}
                            onChange={e => this.change(e)}
                        />
                        <div className="text-danger">{this.state.dateOfBirthError}</div>
                        <label htmlFor="bodyWeight">Body weight:</label><br/>
                        <input
                            type="text"
                            name="bodyWeight"
                            placeholder="Body weight in KG"
                            value={this.state.bodyWeight}
                            onChange={e => this.change(e)}
                        />
                        <div className="text-danger">{this.state.bodyWeightError}</div>
                        <label htmlFor="gender">Gender:</label>
                        <div className="radioGroup" onChange={e => this.change(e)}>
                            <input type="radio" name="gender" value="female" defaultChecked id="female"/><label htmlFor="female"><FontAwesomeIcon icon={faVenus}/></label>
                            <input type="radio" name="gender" value="male" id="male"/><label htmlFor="male"><FontAwesomeIcon icon={faMars}/></label>
                            <input type="radio" name="gender" value="other" id="other"/><label htmlFor="other"><FontAwesomeIcon icon={faGenderless}/></label>
                        </div>
                        <br/>
                        <input type="submit" id="signUp" value="Sign up" className="btn bg-white" onClick={e => this.onSubmit(e)}/>
                    </form>
                </section>
    }
}