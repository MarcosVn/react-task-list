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
	}

	onClick(evt) {
	  this.props.handleRemove(this.props.id)
	}

	onCheck(evt) {
		this.props.handleCheck(this.props.id)
	}

	render() {
		const listStyles = !this.props.checked ? listElementStyles: listElementCheckedStyles;
		return (
			<ListItem 
				className="listItemWidth"
        rightIconButton={
					<div className="flexDiv">
						<IconButton 
							tooltip='Deletar' 
							tooltipPosition='bottom-right' 
							onClick={this.onClick} 
							iconStyle={{color: '#ff0000'}}
						>
							<DeleteIcon/>
						</IconButton>
          	<Checkbox onCheck={this.onCheck} className="marginIco" /> 									
					</div>
				}
      >
        <div className="flexDiv">
          <li style={listStyles}>
            {this.props.task}
          </li>
        </div>
		</ListItem>
		)
	}
} 