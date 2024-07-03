import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/reducer';
import EditTask from '../modals/editTask';

const Task = ({taskObj, index}) => {

    const [modal, setModal] = useState(false);
    const [completed, setCompleted] = useState(taskObj.completed);
    
    const toggle = () => {
        setModal(!modal);
    }
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const dispatch = useDispatch();
    const deleteTask = () => {
        dispatch(
            deleteTodo(taskObj)
        )
    }

    const handleChange = () => {
        dispatch(
            updateTodo(
                {
                    id: taskObj.id,
                    completed: !completed
                }
            )
        )
        setCompleted(!completed);
    }

    useEffect(() => {
        setCompleted(taskObj.completed)
    }, [taskObj.completed]);

    return (
        <div class = "card-wrapper me-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.titulo}</span>
                <p className = "mt-3">{taskObj.descripcion}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className= "far fa-edit me-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => {setModal(true)}}></i>
                    <i className="fas fa-trash-alt me-3" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => deleteTask()}></i>
                    <input onChange={handleChange} className="form-check-input me-1" type="checkbox" checked={completed} id='completed'></input>
                    <label className="form-check-label" for="flexCheckChecked">
                       Completada
                    </label>
                </div>
             </div>
            <EditTask modal={modal} toggle={toggle} taskObj={taskObj}/>
        </div>
    );
}

export default Task;