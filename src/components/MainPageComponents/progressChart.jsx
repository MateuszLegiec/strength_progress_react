import React, {Component} from "react";
import '../../styles/basicStyle.css'
import '../../styles/mainStyle.css'
import {Line} from 'react-chartjs-2'

export default class Progress extends Component{

    constructor(props){
        super(props);
        const chartData = this.getChartSeries(this.props.userId,"ex1");
        this.state = {
            exercises: ["ex1","ex2","ex3"],
            chartData: chartData
        };
    }

    render(){
        return  <section id="canvasItem">
                    <form id="exerciseChart" className="text-left" onChange={ e => this.handleChange(e)}>
                        <label htmlFor="exerciseCheckbox">Exercise:</label><br/>
                        <select className="form-control" id="exerciseCheckbox" name="choice">
                            {this.state.exercises.map(value => <option key={value}>{value}</option>)}
                        </select>
                    </form>
                    <div className="text-danger">{(this.state.exercises.length === 0)?"You do not have any saved workouts yet":""}</div>
                    <div className="chart-container position-relative">
                        <div id="lineChart">
                            <h3 className="chartHeader text-left">One repchart</h3>
                            <Line
                                data={
                                    {
                                        labels: this.state.chartData.map(e => e.date),
                                        datasets: [{
                                            label: 'One rep max',
                                            backgroundColor: 'rgb(255, 128, 128)',
                                            borderColor: 'rgb(255, 77, 77)',
                                            data: this.state.chartData.map(e => e.oneRepMax)
                                        }]
                                    }
                                }
                                options={{
                                    legend:false
                                }}
                            />
                            <h3 className="chartHeader text-left">Volume chart</h3>
                            <Line
                                data={
                                    {
                                        labels: this.state.chartData.map(e => e.date),
                                        datasets: [{
                                            label: 'Volume',
                                            backgroundColor: 'rgb(153, 204, 255)',
                                            borderColor: 'rgb(77, 166, 255)',
                                            data: this.state.chartData.map(e => {return e.volume}),
                                        }]
                                    }
                                }
                                options={{
                                    legend:false
                                }}
                            />
                        </div>
                    </div>
                </section>
    }

    handleChange = e =>{
        const form = {
            userId: this.props.userId,
            exerciseName: e.target.value
        };
        console.log(JSON.stringify(form));
        const chartData = this.getChartSeries(this.props.userId,this.state.exercises[0]);
        this.setState(chartData);
    };

    //TODO GET CHART SERIES BY USER_ID AND EXERCISE_NAME
    getChartSeries = (userId,exerciseName) => {
        return [
            {date: '2019-03-01', oneRepMax: 120,volume:1999},
            {date: '2019-03-14', oneRepMax: 123,volume:2763},
            {date: '2019-03-21', oneRepMax: 112,volume:2452},
            {date: '2019-03-24', oneRepMax: 143,volume:4200},
            {date: '2019-03-30', oneRepMax: 101,volume:3100},
            {date: '2019-04-03', oneRepMax: 130,volume:1200},
        ];
    };

}