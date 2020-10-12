// External
import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import uuid from 'uuid';

// Components
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      open: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleClick(task) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: uuid(),
          task: task,
          checked: false,
        }
      ]
    })
  }

  handleRemove(id) {
    const currentTasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({
      tasks: currentTasks,
      open: true,
    });
  }

  handleCheck(id) {
    const currentTasks = this.state.tasks.map((task) => {
      if(task.id === id) task.checked = !task.checked
      return task;
    });

    this.setState({
      tasks: currentTasks,
    });
  } 

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const paperSpacing = {
      padding: 10,
      marginTop: 50,
      marginBottom: 100,
      marginRight: 30,
      marginLeft: 30
    }
    
    return (
      <MuiThemeProvider>
       <Paper style={paperSpacing}>
          <h1 style={{ textAlign: 'center'}}>Lista de Tarefas</h1>
          
          <TaskList 
            tasks={this.state.tasks}
            handleRemove={this.handleRemove} 
            handleCheck={this.handleCheck} 
          />

          <TaskForm handleClick={this.handleClick}/>

          <Snackbar
            open={this.state.open}
            message="Tarefa removida com sucesso!"
            autoHideDuration={2000}
            onRequestClose={this.handleRequestClose}
          />
        </Paper>
      </MuiThemeProvider>
    );
  }
}