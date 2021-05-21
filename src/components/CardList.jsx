import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const renderListItems = (items) => {
	return items.map(item => (<Card key={item.id} data={item} />));
}

export default function CardList({ listItems }) {
	return (
		<div>
			<h3 className="list-header">{this.props.title}</h3>
			<Container>
				{renderListItems(listItems)}
			</Container>
		</div>
	);
}
