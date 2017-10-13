import React, {Component} from 'react';

class CheckList extends Component {
	render() {

		console.log(this.props.tasks);

		let tasks = this.props.tasks.map((task) => {
			<li className="checklist__task">
				<input type="checkbox" defaultChecked={task.done} />
				{tasks}
				<a href="#" className="checklist__task--remove" />
			</li>
			});

		return (
			<div className="checklist">
				<ul>{tasks}{1+1}</ul>
			</div>
			)
	}
}

export default CheckList;
