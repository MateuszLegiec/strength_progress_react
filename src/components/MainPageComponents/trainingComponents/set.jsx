import React from "react";

const ExerciseSet = (props) => {
        return (
            <div>
                <input id="reps" placeholder="reps" type="number" min="0" step="1" className="form-control-sm bg-transparent exerciseSet" defaultValue={props.set.reps===0?"":props.set.reps} onChange={e => props.onRepsChange(props.exerciseId,props.set.id,e)}/>
                <input id="weight" placeholder="weight" type="number" min="0" step="0.5" className="form-control-sm bg-transparent exerciseSet" defaultValue={props.set.weight===0?"":props.set.weight} onChange={e => props.onWeightChange(props.exerciseId,props.set.id,e)}/>
                <button className="btn btn-link text-dark text-decoration-none" id="deleteSetButton" onClick={() => props.onDeleteSet(props.exerciseId,props.set.id)}>x</button>
            </div>
        );
    };

export default ExerciseSet;
