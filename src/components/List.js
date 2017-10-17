import React, {Component} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class List extends Component {

	render() {
		let cards = this.props.cards.map((card) => {
			return <Card id={card.id}
						 key={card.id}
						 title={card.title}
						 description={card.description}
						 tasks={card.tasks}
						 status={card.status}
						 color={card.color} />
		});

		return (
			<div className="list">
				{cards}
			</div>
			)
	}
}

List.propTypes = {
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
}


export default List;
