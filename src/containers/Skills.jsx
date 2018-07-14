import React, { Component } from 'react';
import ThumbnailList from 'components/ThumbnailList';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languageList: [],
			technologyList: []
		}
	}

	componentWillMount() {
		// fetch skills
	}

	render() {
		return (
			<div>
				<h2 className="view-port-header">Skills</h2>
				<hr />
				<div>
				<ThumbnailList listItems={this.state.languageList} title="Languages and Frameworks"/>
				</div>
				<div >
				<ThumbnailList listItems={this.state.technologyList} title="Technologies"/>
				</div>
			</div>
		);
	}
};
