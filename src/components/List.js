import React, {Component} from 'react';
import Card from './Card';

class List extends Component {

	render() {
		let cards = this.props.cards.map((card) => {
			return <Card id={card.id}
						 title={card.title}
						 description={card.description}
						 tasks={card.tasks}
						 status={card.status} />
		});

		return (
			<div className="list">
				<h2>{this.props.cards.status}</h2>
				{cards}
			</div>
			)
	}
}

export default List;
