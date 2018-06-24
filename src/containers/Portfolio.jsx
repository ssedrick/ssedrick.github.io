import React, { Component } from 'react';
import CardList from 'components/CardList';

export default class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projectList: [],
		}
	}

	componentDidMount() {
		// perform fetch
	}
	render() {
		return (
			<div>
				<h2 className="view-port-header">Portfolio</h2>
				<hr />
				<div>
					<CardList listItems={this.state.projectList} title="Projects" />
				</div>
			</div>
		);
	}
};
