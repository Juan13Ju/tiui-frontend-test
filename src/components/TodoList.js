import React, {useState} from 'react';
import CreateTask from '../modals/createTask';
import { useSelector } from 'react-redux';
import Task from './Task';
import FilterButtons from './FilterButtons';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState("noFilter");

    const toggle = () => {setModal(!modal)}
    const tasks = useSelector((state) => state.todos);

    const getFilteredTasks = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(task => task.completed);
            case "inProgress":
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        }
    }
    return(
        <>
            <div className='header text-center'>
                <h3 className='pt-3'>Lista Todo</h3>
                <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Crea tarea</button>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-3">
                <FilterButtons setFilter={setFilter}/>
            </div>
            <div className='task-container'>
                {tasks && getFilteredTasks().map((task, index) => {
                    return <Task taskObj={task} index={index}/>
                })}
            </div>
            <CreateTask toggle={toggle} modal={modal}/>
        </>
    )
}

export default TodoList;