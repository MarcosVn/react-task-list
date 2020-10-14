// External
import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { ListItem } from 'material-ui/List';

// Component styles
import './Task.css';

const Task = (props) => {
	const listElementStyles = { fontSize: 18 }
	
	const listElementCheckedStyles = {
		...listElementStyles,
		textDecoration: 'line-through',
	}

	const listStyles = !props.checked ? listElementStyles: listElementCheckedStyles;

	function handleClick(event) {
	  props.handleRemove(props.id)
	}

	function handleCheck(event) {
		props.handleCheck(props.id)
	}

	function handleBlur(event) {
		let newValue = document.getElementById(props.id).textContent
		props.handleBlur(props.id, newValue);
	}
	
	return (
		<ListItem 
			className="listItemWidth"
			rightIconButton={
				<div className="flexDiv">
					<small style={{marginTop: 10, fontSize: '0.7rem'}}>{props.createdAt}</small>
						<IconButton 
							tooltip='Deletar' 
							tooltipPosition='top-right' 
							onClick={handleClick} 
							iconStyle={{color: '#ff0000'}}
						>
							<DeleteIcon/>
						</IconButton>
						<Checkbox 
							onCheck={handleCheck} 
							checked={props.checked} 
							className="marginIco" 
						/> 									
				</div>
			}
		>
			<div className="flexDiv" style={{maxWidth: '10%'}}>
				<li
					id={props.id} 
					contentEditable="true" 
					onBlur={handleBlur} 
					style={listStyles}
				>
				<div style={{maxWidth: 350}}>{props.task}</div>
				</li>
			</div>
		</ListItem>
	)
} 

export default Task;