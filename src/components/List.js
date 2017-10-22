import React, {Component} from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import constants from './constants';
import { DropTarget } from 'react-dnd';

const listTargetSpec = {
	hover(props, monitor) {
		const draggedId = monitor.getItem().id;
		props.cardCallbacks.updateStatus(draggedId, props.id);
	}
}

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

class List extends Component {

	render() {

		const { connectDropTarget } = this.props;

		let cards = this.props.cards.map((card) => {
			return <Card id={card.id}
						 key={card.id}
						 title={card.title}
						 description={card.description}
						 tasks={card.tasks}
						 status={card.status}
						 color={card.color}
						 taskCallbacks={this.props.taskCallbacks}
						 cardCallbacks={this.props.cardCallbacks} />
		});

		return connectDropTarget(
			<div className="list">
				<h1>{this.props.title}</h1>
				{cards}
			</div>
			)
	}
}

List.propTypes = {
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.object)
}


export default DropTarget(constants.CARD, listTargetSpec, collect) (List);
