import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
	margin: 1vh;
	height: 1.25em;
	width: 1.25em;
`;

export default function SiteIcon({ name, url }) {
	return (
		<a href={url}>
			<Img
				src={`images/${name.toLowerCase()}.svg`}
				alt={name}
			/>
		</a>
	);
}

SiteIcon.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
