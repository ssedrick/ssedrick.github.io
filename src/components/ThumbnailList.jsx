import React, { PureComponent } from 'react';
import Thumbnail from './Thumbnail';

export default class ThumbnailList extends PureComponent {
	renderListItems() {
		const { listItems } = this.props;
		return listItems.map(item => (
			<div className="square">
				<Thumbnail key={item.id} src={item.icon} />
			</div>
		));
	}
	render() {
		return (
			<div className="row">
				<h3>{this.props.title}</h3>
				{this.renderListItems()}
			</div>
		);
	}
}
