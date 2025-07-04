import React, { useState } from 'react'
import './Task3.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Task3() {
    const [task, setTask] = useState("")
    const [task1, setTask1] = useState([])
    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTask1([...task1, task]);
            setTask('');
        }
    }
    const handleDelete = (index) => {
        const newTask = task1.filter((_, i) => i !== index);
        setTask1(newTask)
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">TodoList App</a>
                </div>
            </nav>
            <div className='main'>
                <div className='box'>
                    <input type="text" placeholder='make your day' value={task} onChange={(e) => setTask(e.target.value)} required />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
                </div>
                <ul>
                    {task1.map((t, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {t}
                            <button className="btn btn-danger btn-sm" onClick={()=>handleDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Task3