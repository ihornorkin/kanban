import React, {Component} from 'react';

class CheckList extends Component {
	render() {
		let tasks = this.props.tasks.map((task) => {
			<li className="checklist__task">
				<input type="checkbox" defaultChecked={task.done} />
				{task.name}
				<a href="#" className="checklist__task--remove" />
			</li>
			});

/*		let cards = this.props.cards.map((card) => {
			return <Card id={card.id}
						 title={card.title}
						 description={card.description}
						 tasks={card.task} />
		});*/

		return (
			<div className="checklist">
				<ul>{tasks}</ul>
			</div>
			)
	}
}

export default CheckList;
