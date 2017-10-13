import React, {Component} from 'react';
import CheckList from './CheckList';

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
		let cardDetails;
		let sideColor = {
			position: 'absolute',
			zIndex: -1,
        	top: 0,
        	bottom: 0,
        	left: 0,
			width: 7,
			backgroundColor: this.props.color
		}
		if (this.state.showDetails) {
			cardDetails = (
					<div className={this.state.showDetails ? "card__title card__title--is-open" : "card__title"}>
						{this.props.description}
						<CheckList cardId={this.props.id} tasks={this.props.tasks} />
					</div>
				);
		}
		return (
			<div className="card" onClick={this.toggleDetails.bind(this)}>
				<h2>{this.props.status}</h2>
				<div className="card__title">{this.props.title}</div>
				{cardDetails}
			</div>
			)
	}
}

export default Card;
