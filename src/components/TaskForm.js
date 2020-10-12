import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './Task.css';

export default class TaskForm extends Component {
	constructor() {
		super();
		this.onClick = this.onClick.bind(this);
		this.state = {
			inputValue: '',
		}
	}

	onClick(event) {
		event.preventDefault();
		const task = this.state.inputValue.trim();

		if (task === '') {
			return
		}
		else {
			const form = document.getElementById("taskForm");
			form.reset();
			this.props.handleClick(task);
			this.setState({ inputValue: ''});
		}
	}

	render() {
		return(
			<MuiThemeProvider>
				<form id="taskForm">
					<Paper className="paperWidth" zDepth={1}>
						<div className="marginList">
							<TextField 
								hintText="Digite aqui"
								fullWidth
								className="AddText" 
								onChange={(e) => this.setState({ inputValue: e.target.value })}
							/>	
						</div>
					</Paper>
					
					<RaisedButton 
						type="submit"
						variant="contained" 
						label='Inserir' 
						primary  
						onClick={this.onClick}
						style={{marginLeft: 10, height: 50}}
					/>
				</form>
			</MuiThemeProvider>
		)
	}
}