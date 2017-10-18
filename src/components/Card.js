import React, {Component} from 'react';
import CheckList from './CheckList';
import PropTypes from 'prop-types';

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

class Card extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	showDetails: false
	  };
	}

	toggleDetails(event) {
		this.setState({showDetails: !this.state.showDetails})
	}

	render() {
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
		return (
			<div className="card">
				<div style={sideColor} />
				<h2 onClick={this.toggleDetails.bind(this)}>{this.props.status}</h2>
				<div className="card__title">{this.props.title}</div>
				{cardDetails}
			</div>
			)
	}
}

Card.propTypes = {
	id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default Card;
