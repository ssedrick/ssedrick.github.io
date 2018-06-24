import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import { media } from 'utils';

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${ media.handheld`
		flex-direction: row;
	`}
`;

const NavMenu = () => (
	<FlexContainer>
		<NavItem
			url='/'
			name='Home'
			icon='home'
		/>
		<NavItem
			url='/resume'
			name='Resume'
			icon='insert_drive_file'
		/>
		<NavItem
			url='/portfolio'
			name='Portfolio'
			icon='folder_shared'
		/>
	</FlexContainer>
);

export default NavMenu;
