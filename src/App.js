// External
import React, { useState } from 'react';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {v4 as uuid} from 'uuid';

// Components
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = (props) => {
  let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const [state, setState] = useState({ 
    tasks: existingTasks,
    open: false
  });

  const paperSpacing = {
    padding: 10,
    marginTop: 50,
    marginBottom: 100,
    marginRight: 30,
    marginLeft: 30
  };

  function handleClick(text) {
    const currentTasks = [
      ...state.tasks,
      {
        id: uuid(),
        task: text,
        createdAt: new Date().toLocaleString(),
        checked: false,
      }
    ]

    setState({ tasks: currentTasks });
    localStorage.setItem('tasks', JSON.stringify(currentTasks));
  }

  function handleRemove(id) {
    const currentTasks = state.tasks.filter(task => task.id !== id);

    setState({
      tasks: currentTasks,
      open: true,
    });

    localStorage.setItem('tasks', JSON.stringify(currentTasks));
  }

  function handleCheck(id) {
    const currentTasks = state.tasks.map((task) => {
      if(task.id === id) task.checked = !task.checked
      return task;
    });

    setState({ tasks: currentTasks });
    localStorage.setItem('tasks', JSON.stringify(currentTasks));
  }
  
  function handleBlur(id, newValue) {
    let currentTask = state.tasks.filter(task => task.id === id);
    const tasks = state.tasks.filter(task => task.id !== id);
    currentTask[0].task = newValue;

    const currentTasks = [
      ...tasks,
      currentTask[0]
    ]

    setState({
      tasks: currentTasks,
    });

    localStorage.setItem('tasks', JSON.stringify(currentTasks));
  }

  function handleRequestClose() {
    setState({ 
      tasks: state.tasks, 
      open: false
    });
  }
  
  return (
    <MuiThemeProvider>
      <Paper style={paperSpacing}>
        <h1 style={{ textAlign: 'center'}}>Minhas Tarefas</h1>
        
        <TaskList 
          tasks={state.tasks}
          handleRemove={handleRemove} 
          handleCheck={handleCheck}
          handleBlur={handleBlur} 
        />

        <TaskForm handleClick={handleClick}/>

        <Snackbar
          open={state.open}
          message="Tarefa removida com sucesso!"
          autoHideDuration={2000}
          onRequestClose={handleRequestClose}
        />
      </Paper>
    </MuiThemeProvider>
  );
}

export default App;