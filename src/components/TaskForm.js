// External
import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Component style
import './Task.css';

const TaskForm = (props) => {
	const [state, setState] = useState({ inputValue: '' });

	function handleClick(event) {
		event.preventDefault();
		const task = state.inputValue.trim();

		if (task === '') {
			return
		}
		else {
			const form = document.getElementById("taskForm");
			form.reset();
			props.handleClick(task);
			setState({ inputValue: '' });
		}
	}

	return (
		<MuiThemeProvider>
			<form id="taskForm">
				<Paper className="paperWidth" zDepth={1}>
					<div className="marginList">
						<TextField 
							hintText="Digite aqui"
							fullWidth
							className="AddText" 
							onChange={(e) => setState({ inputValue: e.target.value })}
						/>	
					</div>
				</Paper>
					
				<RaisedButton 
					type="submit"
					variant="contained" 
					label='Inserir' 
					primary  
					onClick={handleClick}
					style={{marginLeft: 10, height: 50}}
				/>
			</form>
		</MuiThemeProvider>
	)
}

export default TaskForm;