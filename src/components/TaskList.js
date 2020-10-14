// External
import React from 'react';
import List from 'material-ui/List';

// Components
import Task from './Task';
import './Task.css';

const TaskList = (props) => {
    const {
      tasks,
      handleRemove,
      handleCheck,
      handleBlur
    } = props;

    const tasksList = tasks.map((task) => {
      return (
        <Task 
          key={task.id} 
          task={task.task} 
          id={task.id}
          checked={task.checked}
          createdAt={task.createdAt}
          handleRemove={handleRemove}
          handleCheck={handleCheck}
          handleBlur={handleBlur}
        />
      )
    });

    return (
      <List className="marginList">
        <ul>{tasksList}</ul>
      </List>
    )
}

export default TaskList;