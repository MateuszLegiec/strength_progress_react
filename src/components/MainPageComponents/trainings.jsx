import React, {Component} from "react";
import CalendarHeatmap from 'react-calendar-heatmap'
import Training from "./trainingComponents/training";
export default class Trainings extends Component{

    constructor(props){
        super(props);
        let frequency = this.getUserFrequency(this.props.userId);
        this.state = {
            trainingDate: "",
            frequency: frequency
        };
    }

    render(){
        return <section id="Trainings">
                    <CalendarHeatmap
                        startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                        endDate={Date.now()}
                        values = {this.state.frequency}
                        classForValue={(value) => { return (!value)?'color-empty':`color-scale-undefined`;}}
                        titleForValue={value => { return (value===null)?"":value.date}}
                    />
                    <Training userId={this.props.userId} onSubmit={this.handleTrainingSubmit}/>
                </section>
    }

    //TODO POST REQUEST USER_FREQUENCY
    getUserFrequency = (userId) => {
        console.log(JSON.stringify({userId: userId}));
        return [
            { date: '2019-01-01'},
            { date: '2019-01-03'},
            { date: '2019-01-06'},
        ]
    };

    handleTrainingSubmit = () => {
        let frequency = this.getUserFrequency(this.props.userId);
        this.setState({frequency});
    };

}