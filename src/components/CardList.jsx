import React, { PureComponent } from 'react';
import Card from './Card';

export default class CardList extends PureComponent {
	renderListItems() {
		const { listItems } = this.props;
		return listItems.map(item => (<Card key={item.id} data={item} />));
	}

	render() {
		return (
			<div>
				<h3 className="list-header">{this.props.title}</h3>
				<div className="row">
					{this.renderListItems()}
				</div>
			</div>
		);
	}
}
