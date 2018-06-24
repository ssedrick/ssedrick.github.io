import React, { Component } from 'react';
import styled from 'styled-components';
import PictureViewer from 'components/PictureViewer';
import NavMenu from 'components/NavMenu';
import { media } from 'utils';

const Container = styled.div`
	background-color: #212121;
	color: #163d64;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	${ media.handheld`
		flex-direction: column;
		justify-content: flex-start;
	`}
`;

export default class Layout extends Component {
	render() {
		return (
			<Container>
				<PictureViewer />
				<NavMenu />
				{this.props.children}
			</Container>
		);
	}
};
