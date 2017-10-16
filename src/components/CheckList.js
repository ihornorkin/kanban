import React, {Component} from 'react';

class CheckList extends Component {
	render() {

		let tasks = this.props.tasks.map((task) => {
			return <li className="checklist__task" key={task.id}>
				<input type="checkbox" defaultChecked={task.done} />
				{task.name}
				<button className="checklist__task--remove">X</button>
			</li>
			});

		return (
			<div className="checklist">
				<ul>{tasks}</ul>
				<input type="text"
						className="checklist--add-task"
						placeholder="Add new task" />
			</div>
			)
	}
}

export default CheckList;
