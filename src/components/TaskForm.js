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
			const form = document.getElementById("myForm");
			form.reset();
			this.props.handleClick(task);
			this.setState({ inputValue: ''});
		}
	}

	render() {
		return(
			<MuiThemeProvider>
				<div>
					<form id="myForm">
					<Paper className="listItemWidth" zDepth={1}>
					<div className="marginList">
						<TextField 
							hintText="O que devo fazer?"
							className="AddText" 
							fullWidth
							onChange={(e) => this.setState({ inputValue: e.target.value })}
						>
						</TextField>
					</div>

					</Paper>
						<br/>
						<RaisedButton 
							type="submit" 
							label='Adicionar Tarefa' 
							primary  
							onClick={this.onClick} 
						/>
					</form>
				</div>
			</MuiThemeProvider>
		)
	}
}