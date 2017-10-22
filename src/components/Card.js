import React, {Component} from 'react';
import CheckList from './CheckList';
import PropTypes from 'prop-types';
import ReactCSSTransitionGropu from 'react-addons-css-transition-group';
import { DragSource, DropTarget } from 'react-dnd';
import constants from './constants';

/*Custome validation*/
/*let titlePropType = (props, propName, componentName) => {
    if (props[propName]) {
        let value = propName[propName];
        if (typeof value !== 'string') {
            return new Error(
                `${propName} in ${componentName} is not string`
            )
        } else if (value.length > 80) {
            return new Error(
            `${propName} in ${componentName} is longer than 80 characters`
            )
        }
    }
};*/

const cardDropSpec = {
	hover(props, monitor) {
		const draggedId = monitor.getItem().id;
		props.cardCallbacks.updatePosition(draggedId, props.id);
	}
};

let collectDrop = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget()
	};
};

const cardDragSpec = {
    beginDrag(props) {
        return {
            id: props.id,
            status: props.status
        };
    },
    endDrag(props) {
        props.cardCallbacks.persistCardDrag(props.id, props.status);
    }
};

let collectDrag = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource()
	};
};

class Card extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	showDetails: false
	  };
	}

	toggleDetails() {
		this.setState({showDetails: !this.state.showDetails})
	}

	render() {

		const { connectDragSource, connectDropTarget } = this.props;

		let cardDetails;
		let sideColor = {
			position: 'absolute',
			zIndex: -1,
        	top: 0,
        	bottom: 0,
        	left: 0,
			width: 7,
			backgroundColor: this.props.color
		};
		if (this.state.showDetails) {
			cardDetails = (
					<div className="card__title card__title--is-open">
						{this.props.description}
						<CheckList taskCallbacks={this.props.taskCallbacks}
								   cardId={this.props.id}
								   tasks={this.props.tasks} />
					</div>
				);
		}
		return connectDropTarget(connectDragSource(
			<div className="card">
				<div style={sideColor} />
				<h2 onClick={this.toggleDetails.bind(this)}>{this.props.status}</h2>
				<div className="card__title">{this.props.title}</div>
				<ReactCSSTransitionGropu transitionName="toggle"
										 transitionEnterTimeout={250}
										 transitionLeaveTimeout={250}>
					{cardDetails}
				</ReactCSSTransitionGropu>
			</div>
			))
	}
}

Card.propTypes = {
	id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
}

const dragHighOrderCard = DragSource(constants.CARD, cardDragSpec, collectDrag)(Card);
const dragDropHighOrderCard = DropTarget(constants.CARD, cardDropSpec, collectDrop)(dragHighOrderCard);
export default dragDropHighOrderCard