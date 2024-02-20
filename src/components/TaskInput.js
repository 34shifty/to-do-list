import React from 'react';
import './TaskInput.css'

const TaskInput = ({onKeyDown}) => {
    return (
        <input type='text' placeholder='add task' onKeyDown={onKeyDown}></input>
    )
}

export default TaskInput;