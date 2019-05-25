import React from "react";
import ExerciseSet from "./set";
import {namesOfExercises} from "../../../exercises";

const Exercise = (props) => {
        return (
            <div id="exerciseContainer" className="shadow-sm">
                <button  className="btn btn-link text-dark text-decoration-none " id="xButton" onClick={() => props.onDeleteExercise(props.exercise.id)}>x</button>
                <form id="exercise" >
                    <select className="bg-transparent" id="newExerciseCheckbox" name="choice" defaultValue={props.exercise.name} onChange={e => props.onExerciseNameChange(props.exercise.id,e)}>
                        {   namesOfExercises.map(e => <option key={e.value}>{e.name}</option>)}
                    </select>
                <br/>
                        {   props.exercise.sets.map(
                            set => <ExerciseSet
                                key={set.id}
                                set={set}
                                exerciseId={props.exercise.id}
                                onDeleteSet={props.onDeleteSet}
                                onWeightChange={props.onWeightChange}
                                onRepsChange={props.onRepsChange}
                            />)}
                    <button onClick={(e) => props.onAddSet(props.exercise.id,e)} className="btn text-dark exerciseButton" id="addSetButton">Add set</button>
                </form>
            </div>
        );
};

export default Exercise;