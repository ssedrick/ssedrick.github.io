import React, { useState } from 'react';
import ThumbnailList from 'components/ThumbnailList';

export default function Skills() {
	const [languageList, updateLanguages] = useState([]);
	const [technologyList, updateTechnologies] = useState([]);

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
