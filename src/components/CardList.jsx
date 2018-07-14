import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export default class CardList extends PureComponent {
	renderListItems() {
		const { listItems } = this.props;
		return listItems.map(item => (<Card key={item.id} data={item} />));
	}

	render() {
		return (
			<div>
				<h3 className="list-header">{this.props.title}</h3>
				<Container>
					{this.renderListItems()}
				</Container>
			</div>
		);
	}
}
