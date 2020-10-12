import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox'
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { ListItem } from 'material-ui/List';

import './Task.css';

const listElementStyles = {
	fontSize: 18
}

const listElementCheckedStyles = {
	...listElementStyles,
	textDecoration: 'line-through',
}

export default class Task extends Component {
  constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.onCheck = this.onCheck.bind(this);
		this.onBlur = this.onBlur.bind(this);
	}

	onClick(evt) {
	  this.props.handleRemove(this.props.id)
	}

	onCheck(evt) {
		this.props.handleCheck(this.props.id)
	}

	onBlur(evt) {
		let newValue = document.getElementById(this.props.id).textContent
		this.props.handleBlur(this.props.id, newValue);
	}

	render() {
		const listStyles = !this.props.checked ? listElementStyles: listElementCheckedStyles;
		
		return (
			<ListItem 
				className="listItemWidth"
        rightIconButton={
					<div className="flexDiv">
						<small style={{marginTop: 10}}>{this.props.createdAt}</small>
						<IconButton 
							tooltip='Deletar' 
							tooltipPosition='top-right' 
							onClick={this.onClick} 
							iconStyle={{color: '#ff0000'}}
						>
							<DeleteIcon/>
						</IconButton>
						<Checkbox 
							onCheck={this.onCheck} 
							checked={this.props.checked} 
							className="marginIco" /> 									
					</div>
				}
      >

        <div className="flexDiv" style={{maxWidth: '60%'}}>
					<li
						id={this.props.id} 
						contentEditable="true" 
						onBlur={this.onBlur} 
						style={listStyles}
					>
            {this.props.task}
          </li>
        </div>
		</ListItem>
		)
	}
} 