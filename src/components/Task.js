import React from "react";
import './Task.css';

const Task = ({task, taskID, drag, tableName, listName}) => {
    function taskClicked () {
        const task = document.querySelectorAll(`[listname='${listName}'] [taskid='${taskID}']`)[0];
        const taskParagraph = task.children[1];
        const dot = task.children[0];
        task.classList.toggle('clicked');
        taskParagraph.classList.toggle('ellipsis');
        taskParagraph.classList.toggle('lightgrey');
        dot.classList.toggle('displayNone');
    }

    let bgColor = '#FF3131';
    switch (listName){
        case "toDoArray":
            bgColor = '#FF3131';
            break;
        case "workingOnArray":
            bgColor = '#5E17EB';
            break;
        case "doneArray":
            bgColor = '#00BF63';
            break;
        default: 
            bgColor = '#FF3131';
    }

    return (
        <div className="task" taskid={taskID} onClick={taskClicked} draggable='true' onDragStart={drag} tablename={tableName} listname={listName}>
            <span className="dot" listname={listName} style={{backgroundColor: bgColor}}></span>
            <p className="ellipsis" task-paragraph-id={taskID} listname={listName}>{task}</p>
        </div>
    )
}

export default Task;