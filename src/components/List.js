import React, {Component} from 'react';
import Card from './Card';

class List extends Component {

	render() {
		let cards = this.props.cards.map((card) => {
			return <Card id={card.id}
						 title={card.title}
						 description={card.description}
						 tasks={card.task} />
		});

/*		let list = this.props.cards.map((index) => {
			return <h3>{index}</h3>
		});*/

console.log(this.props);

		return (
			<div className="list">
				{cards}
			</div>
			)
	}
}

export default List;
