import React, {Component} from "react";
import '../styles/basicStyle.css'
import '../styles/gettingStartedStyle.css'
import '../styles/mainStyle.css'
import StartPage from "./startPage";
import MainWindow from "./mainPage";
import $ from "jquery";

export default class App extends Component{

    state = {
        value: 0, // 0-startPage 1-mainPage
        user: null,
    };


    render(){
        return <div id="body">
            {this.appController()}
        </div>
    }

    appController = () => {
        return (this.state.value === 0)?<StartPage onSignIn={this.handleSignIn}/>:<MainWindow user={this.state.user} onSignOut={this.handleSignOut} onUpdateUser={this.handleUserUpdate}/>;
    };

    handleSignIn = (user) => {
        const body = $('#body');
        body.fadeOut(500);
        this.setState({user: user});
        setTimeout(function () {this.setState({value: 1});}.bind(this),500);
        body.fadeIn(500);
    };

    handleSignOut = () => {
        const body = $('#body');
        body.fadeOut(500);
        setTimeout(function () {
            this.setState({value: 0, user: null})}.bind(this),
            500);
        body.fadeIn(500);
    };

    handleUserUpdate = () => {
      //TODO Post request userDTO
        console.log("handlingUserUpdateByRoot");
    };

}