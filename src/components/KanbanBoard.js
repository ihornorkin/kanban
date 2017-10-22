import React, {Component} from 'react';
import List from './List';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class KanbanBoard extends Component {
	render() {
		return (
			<div className="app">
				<List taskCallbacks={this.props.taskCallbacks}
					  cardCallbacks={this.props.cardCallbacks}
					  id='todo'
					  cards={this.props.cards.filter((card) => card.status === "todo")} />
				<List taskCallbacks={this.props.taskCallbacks}
					  cardCallbacks={this.props.cardCallbacks}
					  id='in-progress'
					  cards={this.props.cards.filter((card) => card.status === "in-progress")} />
				<List taskCallbacks={this.props.taskCallbacks}
					  cardCallbacks={this.props.cardCallbacks}
					  id='done'
					  cards={this.props.cards.filter((card) => card.status === "done")} />
			</div>
			)
	}
}

KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
};

export default DragDropContext(HTML5Backend)(KanbanBoard);
