import React, {Component} from "react";
import Exercise from "./exercise";
import {isPositiveDouble, isPositiveInt} from "../../../validation";
import {
    invalidExerciseLengthMessage,
    invalidPositiveDoubleMessage,
    invalidPositiveIntMessage,
    invalidSetsLengthMessage
} from "../../../messages";

export default class Training extends Component {

    constructor(props){
        super(props);
        let date = this.maxDatepickerDate();
        let exercises = this.findExercisesByUserIdAndDate(this.props.userId,date);
        this.state = {
            exercises: exercises,
            repsError: "",
            weightError: "",
            setsLengthError: "",
            exercisesLengthError: "",
            trainingDate: date
            }
    }
    //TODO post
    findExercisesByUserIdAndDate = (userId,date) => {
        const form = {
            userId: userId,
            trainingDate: date
        };
        console.log(JSON.stringify(form));

        return [
            {
                id:0,
                name:"Bench Press",
                sets: [
                    {id:1, reps:12, weight:32},
                    {id:2, reps:0, weight:0},
                    {id:3, reps:0, weight:0},
                ]
            },
            {
                id:1,
                name:"Squat",
                sets: [
                    {id:1, reps:0, weight:0},
                    {id:2, reps:0, weight:0},
                    {id:3, reps:0, weight:0},
                ]
            },
            {
                id:2,
                name:"Deadlift",
                sets: [
                    {id:1, reps:0, weight:0},
                    {id:2, reps:0, weight:0},
                    {id:3, reps:0, weight:0},
                ]
            },
            {
                id:3,
                name:"Deadlift",
                sets: [
                    {id:1, reps:0, weight:0},
                    {id:2, reps:0, weight:0},
                    {id:3, reps:0, weight:0},
                    {id:4, reps:0, weight:0},
                    {id:5, reps:0, weight:0},
                ]
            }
        ]
    };

    handleAddExercise = () => {
        let exercises = this.state.exercises;

        let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

        while (exercises.map(e => e.id).includes(id)){
            id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        }

        let exercise = {
            id:id,
            name:"",
            sets:[{id:1,reps:0,weight:0}]
        };
        exercises.push(exercise);
        this.setState({exercises});
    };

    handleDeleteExercise = exerciseId => {
        const exercises = this.state.exercises.filter(e => e.id !== exerciseId);
        this.setState({exercises});
    };

    handleDeleteSet = (exerciseId,setId) => {
        let exercises = this.state.exercises;
        const index = exercises.findIndex(e => e.id === exerciseId);
        if(exercises[index].sets.length === 1) {
            this.handleDeleteExercise(exerciseId);
        }else{
            exercises[index].sets = exercises[index].sets.filter(s => s.id !== setId);
            this.setState({exercises});
        }
    };

    handleAddSet = (exerciseId,e) => {
        e.preventDefault();
        let exercises = this.state.exercises;
        const index = exercises.findIndex(e => e.id === exerciseId);

        let id = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1));

        while (exercises[index].sets.map(s => s.id).includes(id)){
            id = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1));
            console.log(id);
        }

        const set = {id:id,reps:0,weight:0};
        exercises[index].sets = [...exercises[index].sets, set];

        this.setState({exercises});
    };

    handleWeightChange = (exerciseId,setId,event) => {
        let exercises = this.state.exercises;
        const indexOfExercise = exercises.findIndex(e => e.id === exerciseId);
        const sets = exercises[indexOfExercise].sets;
        const indexOfSet = sets.findIndex(s => s.id === setId);
        exercises[indexOfExercise].sets[indexOfSet].weight = event.target.value;
        this.setState({exercises});
    };

    handleRepsChange = (exerciseId,setId,event) => {
        let exercises = this.state.exercises;
        const indexOfExercise = exercises.findIndex(e => e.id === exerciseId);
        const sets = exercises[indexOfExercise].sets;
        const indexOfSet = sets.findIndex(s => s.id === setId);
        exercises[indexOfExercise].sets[indexOfSet].reps = event.target.value;
        this.setState({exercises});
    };

    handleExerciseNameChange = (exerciseId,event) => {
        let exercises = this.state.exercises;
        const index = exercises.findIndex(e => e.id === exerciseId);
        exercises[index].name = event.target.value;
        this.setState({exercises});
    };

    validation = () => {
        const exercises = this.state.exercises;
        const areRepsInvalid = [].concat(...exercises
            .map(e => e.sets))
            .map(s => isPositiveInt(s.reps))
            .includes(false);
        const areWeightInvalid = [].concat(...exercises
            .map(e => e.sets))
            .map(s => isPositiveDouble(s.weight))
            .includes(false);
        const areSetsLengthsIncludesZero = exercises.map(e => e.sets.length).includes(0);
        const isExerciseLengthZero = exercises.length === 0;

        const weightError = areWeightInvalid?invalidPositiveDoubleMessage:"";
        const repsError = areRepsInvalid?invalidPositiveIntMessage:"";
        const setsLengthError = areSetsLengthsIncludesZero?invalidSetsLengthMessage:"";
        const exercisesLengthError = isExerciseLengthZero?invalidExerciseLengthMessage:"";

        if(weightError || repsError || setsLengthError || exercisesLengthError){
            this.setState({weightError,repsError, setsLengthError , exercisesLengthError});
            return false;
        }
        return true;
    };

    handleSaveTraining = e => {
      e.preventDefault();
      const isValid = this.validation();
      if(isValid){
          const form = {
              userId: this.props.userId,
              date: this.state.trainingDate,
              exercises: this.state.exercises
          };
          console.log(JSON.stringify(form));
          this.props.onSubmit();
          this.setState({
              repsError: "",
              weightError: "",
              setsLengthError: "",
              exercisesLengthError: "",
          });
      }
    };

    //TODO POST REQUEST findTrainingByUserIdAndDate
    handleDateChange = e => {
        e.preventDefault();
        this.setState({
            trainingDate: e.target.value,
            exercises: this.findExercisesByUserIdAndDate(this.props.userId,e.target.value)
        });
    };

    maxDatepickerDate = () => {
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }
        return today.getFullYear()+'-'+mm+'-'+dd;
    };

    //TODO DELETE TRAINING BY USER_ID AND DATE
    handleDeleteTraining = e => {
        e.preventDefault();
        const isValid = this.validation();
        if(isValid){
            const form = {
                userId: this.props.userId,
                date: this.props.trainingDate,
            };
            console.log(JSON.stringify(form));
            this.props.onSubmit();
        }
    };

    render() {
         return(
            <div id="training">
                <h1>Training</h1>
                <div className="row justify-content-between">
                    <label htmlFor="date" className="col-md-4">Date:<input type="date" id="datepicker" defaultValue={this.state.trainingDate} max={this.maxDatepickerDate()} onChange={e => this.handleDateChange(e)} className="form-control"/></label>
                    <div className="col-md-8 text-right">
                        <button className="btn btn-danger col-md-4" id="deleteTrainingButton" onClick={e => this.handleDeleteTraining(e)}>Delete training</button>
                        <button type="submit" className="btn btn-success col-md-7" id="saveTrainingButton" onClick={e => this.handleSaveTraining(e)}>Save training</button>
                    </div>
                </div>
                <div className="text-danger trainingErrors">{this.state.repsError}</div>
                <div className="text-danger trainingErrors">{this.state.weightError}</div>
                <div className="text-danger trainingErrors">{this.state.setsLengthError}</div>
                <div className="text-danger trainingErrors">{this.state.exercisesLengthError}</div>
                <div className="row rowOfExercises">
                {this.state.exercises.map(
                    exercise => (<Exercise
                        key={exercise.id}
                        exercise={exercise}
                        onDeleteExercise={this.handleDeleteExercise}
                        onDeleteSet={this.handleDeleteSet}
                        onAddSet={this.handleAddSet}
                        onExerciseNameChange={this.handleExerciseNameChange}
                        onWeightChange={this.handleWeightChange}
                        onRepsChange={this.handleRepsChange}
                />))}
                    <button id="nextExerciseButton" className="btn-lg btn btn-light text-dark" onClick={this.handleAddExercise}>Next exercise</button>
                </div>
            </div>
        )
    }
}