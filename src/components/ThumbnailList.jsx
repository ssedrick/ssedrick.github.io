import React, { PureComponent } from 'react';
import Thumbnail from './Thumbnail';

const renderListItems = (items) => {
	return items.map(item => (
		<div className="square">
			<Thumbnail key={item.id} src={item.icon} />
		</div>
	));
}

export default function ThumbnailList({ title, listItems }) {
	return (
		<div className="row">
			<h3>{title}</h3>
			{renderListItems(listItems)}
		</div>
	);
}
