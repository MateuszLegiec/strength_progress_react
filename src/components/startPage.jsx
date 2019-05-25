import React, {Component} from "react";
import BasicNavigation from './startPageComponents/nav'
import GettingStarted from "./startPageComponents/gettingStarted";
import FindUs from "./startPageComponents/findUs";
import Footer from "./startPageComponents/basicFooter";
import About from "./startPageComponents/aboutApp"
import SignUp from "./startPageComponents/signUp";
import SignIn from "./startPageComponents/signIn";
import $ from 'jquery';

export default class StartPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: 0,
        }
    }

    render(){
        return <div>
            <BasicNavigation onLogoClick={this.handleLogoClick}/>
                    <main className="position-relative " id="home">
                        {this.mainController()}
                    </main>
            <About/>
            <div id="fixed" className="position-relative"> </div>
            <FindUs/>
            <Footer/>
        </div>
    }

    mainController = () => {

        if (this.state.value === 0){
            return <GettingStarted onRegistrationButtonClick={this.handleRegistrationButtonClick} onLoginButtonClick={this.handleLoginButtonClick}/>
        }else if (this.state.value === 1){
            return <SignUp/>
        } else if (this.state.value === 2){
            return <SignIn onSignIn={this.props.onSignIn}/>
        }
    };


    handleLogoClick = () => {
        const home = $(`#home`);
        home.fadeOut(300);
        setTimeout(function () {this.setState({value: 0});}.bind(this),300);
        home.fadeIn(300);
    };


    handleRegistrationButtonClick = () => {
        const home = $(`#home`);
        home.fadeOut(300);
        setTimeout(function () {this.setState({value: 1});}.bind(this),300);
        home.fadeIn(300);
    };

    handleLoginButtonClick = () => {
        const home = $(`#home`);
        home.fadeOut(300);
        setTimeout(function () {this.setState({value: 2});}.bind(this),300);
        home.fadeIn(300);
    };

}
