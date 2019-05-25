import React, {Component} from "react";
import {isEmailValid} from "../../validation";
import {invalidEmailMessage, validEmailMessage} from "../../messages";


export default class ModalContent extends Component {

    state = {
        email: "",
        emailMsg: "",
        emailMsgClass: "",
    };

    validate = () => {
        let emailMsg = isEmailValid(this.state.email)?"":invalidEmailMessage;

        if (emailMsg){
            let emailMsgClass = "text-danger";
            this.setState({emailMsg,emailMsgClass});
            return false;
        }
        return true;
    };

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state.email);
            let emailMsg = validEmailMessage;
            let emailMsgClass = "text-success";
            this.setState({
                email: "",
                emailMsg,
                emailMsgClass,
            });
        }
    };
    render() {
        return (
                <div className="forgotPasswordModal">
                    <h1>Forgot password?</h1>
                    <h4>
                        We will send you message with temporary password to the account email address.<br/>
                        When you get email, log in with the temporary password, go to the Your account page and enter a new password.
                    </h4>
                    <form>
                        <label htmlFor="email">Email:
                            <input type="text" className="form-control form-control-lg" placeholder="example@email.com" value={this.state.email} onChange={e => this.setState({ email: e.target.value})}/>
                        </label>
                        <input type="submit" value="Send" className="btn btn-lg btn-outline-info" onClick={e => this.onSubmit(e)}/>
                        <div className={this.state.emailMsgClass}>{this.state.emailMsg}</div>
                    </form>
                </div>
        )
    }

}