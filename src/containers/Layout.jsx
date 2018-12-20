import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PictureViewer from 'components/PictureViewer';
import NavMenu from 'components/NavMenu';
import { media, colors } from 'utils';

const Container = styled.div`
	background-color: ${ colors.blue.darker };
	color: #163d64;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	height: 100vh;
	width: 100%;

	${ media.handheld`
		flex-direction: column;
		justify-content: flex-start;
		overflow-x: hidden;
	`}
`;

export default function Layout({ children }) {
	return (
		<Container>
			<PictureViewer />
			<NavMenu />
			{children}
		</Container>
	);
}

Layout.propTypes = {
	children: PropTypes.node,
};
