import React, {Component} from 'react';
import TaskInput from '../components/TaskInput';
import TaskTable from '../components/TaskTable';

class App extends Component {
    constructor () {
        super ();
        this.state = {
            toDoArray : [],
            workingOnArray: [],
            doneArray: []
        }
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter' && event.target.value.length) {
            const updated = [...this.state.toDoArray];
            updated.push(event.target.value);
            this.setState({toDoArray: updated});
            event.target.value = '';
        }
    };

    drag = (event) => {
        event.dataTransfer.setData("task", event.target.attributes.taskid.value);
        event.dataTransfer.setData("from", event.target.attributes.tablename.value)
    }

    drop = (event) => {
        event.preventDefault();
        const taskID = event.dataTransfer.getData("task");
        const dragTableName = event.dataTransfer.getData("from");
        const dropTableName = event.target.attributes.listname.value;

        if (dragTableName !== dropTableName){
            const task = this.state[dragTableName][taskID];
            const updated = [...this.state[dropTableName]];
            updated.push(task)
            const removed = [...this.state[dragTableName]];
            removed.splice(removed.indexOf(task), 1)
            this.setState({[dropTableName]: updated, [dragTableName]: removed})
        }
    }

    allowDrop = (event) => {
        event.preventDefault();
    }

    render () {
        return (
            <div className='wrap'>
                <h1 className='header'>ToDo List</h1>
                <TaskInput onKeyDown={this.handleKeyDown}/>
                <div className='tables'>
                    <TaskTable list={this.state.toDoArray} listName={'toDoArray'} tableName={'TO DO'} drag={this.drag} drop={this.drop} allowDrop={this.allowDrop}/>
                    <TaskTable list={this.state.workingOnArray} listName={'workingOnArray'} tableName={'WORKING ON'} drag={this.drag} drop={this.drop} allowDrop={this.allowDrop}/>
                    <TaskTable list={this.state.doneArray} listName={'doneArray'} tableName={'DONE'} drag={this.drag} drop={this.drop} allowDrop={this.allowDrop}/>                    
                </div>
            </div>
        )
    }
}

export default App;