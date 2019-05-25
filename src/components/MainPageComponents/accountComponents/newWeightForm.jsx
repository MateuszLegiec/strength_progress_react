import React, {Component} from "react";
import {isBodyWeightValid} from "../../../validation";
import {invalidBodyWeightMessage} from "../../../messages";

export default class NewWeightForm extends Component{

    state = {
      newWeight: "",
      newWeightError: ""
    };

    validate = () => {
        let newWeightError = isBodyWeightValid(this.state.newWeightError)?"":invalidBodyWeightMessage;

        if(newWeightError){
            this.setState({newWeightError});
            return false;
        }
        return true;
    };

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let newWeightForm = {
                userId: this.props.userId,
                newWeight: this.state.newWeight
            };
            console.log(JSON.stringify(newWeightForm));
            this.setState({
                newWeight: "",
                newWeightError: ""
            });
            this.props.onUpdateUser();
        }
    };

    render(){
        return  (
            <section>
                <form>
                    <h1>Change weight</h1>
                    <label htmlFor="weight">Weight<br/><input type="text" className="form-control" name="weight" value={this.state.newWeight} onChange={e => this.setState({newWeight: e.target.value})}/></label>
                    <div className="text-danger">{this.state.newWeightError}</div>
                    <input type="submit" className="btn border-secondary btn-light" value="Change weight" onClick={e => this.onSubmit(e)}/>
                </form>
            </section>
        )
    }
}