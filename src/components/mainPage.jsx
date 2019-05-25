import React, {Component} from "react";
import MainWindowNav from "./MainPageComponents/nav";
import Footer from "./startPageComponents/basicFooter";
import UserData from "./MainPageComponents/userData";
import Trainings from "./MainPageComponents/trainings";
import Progress from "./MainPageComponents/progressChart";
import Account from "./MainPageComponents/account";
import $ from "jquery";

export default class MainWindow extends Component{

    state = {
      value: 0  // 0-YourTrainings 1-YourProgress  2-YourAccount
    };

    render(){
        return (
            <div>
                <MainWindowNav onSignOut={this.props.onSignOut} onTrainingButtonClick={this.handleTrainingButtonClick} onProgressButtonClick={this.handleProgressButtonClick} onAccountButtonClick={this.handleAccountButtonClick}/>
                <main className="row">
                <UserData user={this.props.user}/>
                    <div id="mainSection" className="col-md-12 col-lg-9">
                        {this.mainController()}
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }

    mainController = () => {
        if (this.state.value === 0){
            return <Trainings userId={this.props.user.id} className="mainSection"/>
        }else if (this.state.value === 1){
            return <Progress userId={this.props.user.id} className="mainSection"/>
        } else if (this.state.value === 2){
            return <Account userId={this.props.user.id} onUpdateUser={this.props.onUpdateUser} onDeleteUser={this.props.onSignOut} className="mainSection"/>
        }
    };

    handleTrainingButtonClick = () => {
        const main = $(`#mainSection`);
        main.fadeOut(300);
        setTimeout(function () {this.setState({value: 0});}.bind(this),300);
        main.fadeIn(300);
    };

    handleProgressButtonClick = () => {
        const main = $(`#mainSection`);
        main.fadeOut(300);
        setTimeout(function () {this.setState({value: 1});}.bind(this),300);
        main.fadeIn(300);};

    handleAccountButtonClick = () => {
        const main = $(`#mainSection`);
        main.fadeOut(300);
        setTimeout(function () {this.setState({value: 2});}.bind(this),300);
        main.fadeIn(300);
    };
}
