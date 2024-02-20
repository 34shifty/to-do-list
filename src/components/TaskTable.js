import React from 'react';
import './TaskTable.css'
import Task from './Task';

class TaskTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            moreThanThree: false
        }
    }

    clicked = () => {
        this.setState({moreThanThree: !this.state.moreThanThree})
    }

    render () {
        const {list, tableName, drag, drop, allowDrop, listName} = this.props;
        let tasks = list.map((task, id) => <Task task={task} key={id} taskID={id} drag={drag} tableName={listName} listName={listName}/>);
        let button = [];
        
        if (list.length > 3 && this.state.moreThanThree === false) {
            // tasks.splice(3, 0, <button className='viewMore' onClick={this.clicked}>VIEW MORE</button>)
            button = <button className='viewMore' onClick={this.clicked} listname={listName}>VIEW MORE</button>;
            tasks.length = 3;
        } else if (list.length > 3 && this.state.moreThanThree === true) {
            button = <button className='viewMore' onClick={this.clicked} listname={listName}>VIEW LESS</button>;
        }
        return (
            <div className='table'  onDrop={drop} onDragOver={allowDrop} listname={listName}>
                <h3 listname={listName}>{tableName}</h3>
                <div className='tasks'>
                    {tasks}
                </div>
                {button}
            </div>
        )
    }
}

export default TaskTable;





// OLD CODE

// import React from 'react';
// import './TaskTable.css'
// import Task from './Task';

// const TaskTable = ({list, tableName, drag, drop, allowDrop, listName}) => {
//     let tasks = list.map((task, id) => <Task task={task} key={id} taskID={id} drag={drag} tableName={listName} listName={listName}/>);
//     if (list.length > 3) {
//         tasks.splice(3, 0, <button className='viewMore'>VIEW MORE</button>)
//         tasks.length = 4;
//     }
//     return (
//         <div className='table'  onDrop={drop} onDragOver={allowDrop} listname={listName}>
//             <h3 listname={listName}>{tableName}</h3>
//             {tasks}
//         </div>
//     )
// }

// export default TaskTable;