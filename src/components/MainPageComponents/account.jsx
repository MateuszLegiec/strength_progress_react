import React, {Component} from "react";
import '../../styles/basicStyle.css'
import '../../styles/mainStyle.css'
import NewWeightForm from "./accountComponents/newWeightForm";
import NewEmailForm from "./accountComponents/newEmailForm";
import NewPasswordForm from "./accountComponents/newPasswordForm";
import DeleteAccountForm from "./accountComponents/deleteAccountForm";

export default class Account extends Component{

    render(){
        return (
        <section id="account" className="text-left">
            <NewWeightForm userId={this.props.userId} onUpdateUser={this.props.onUpdateUser}/>
            <NewEmailForm userId={this.props.userId} onUpdateUser={this.props.onUpdateUser}/>
            <NewPasswordForm userId={this.props.userId}/>
            <DeleteAccountForm userId={this.props.userId} onDeleteUser={this.props.onDeleteUser}/>
        </section>
        )
    }
}