import React from 'react';

const GettingStarted = (props) => {
    return (
        <section id="start">
            <h1>STRENGTH PROGRESS</h1>
            <h4 className="text-white">Everything you should know about progress in your main lifts</h4>
            <input className="btn btn-outline-light btn-lg"
                   type="button"
                   id="signUpButton"
                   defaultValue="Sign up"
                   onClick={props.onRegistrationButtonClick}
            />
            <input className="btn btn-outline-light btn-lg"
                   type="button"
                   id="signInButton"
                   defaultValue="Sign in"
                   onClick={props.onLoginButtonClick}
            />
        </section>
    )
};

export default GettingStarted;