import React, { Component } from 'react';
import styled from 'styled-components';
import Content from './Content';
import { Github, LinkedIn } from 'components/icons';

const IconRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export default function Home() {
	return (
		<Content>
			<h3>Hi, I'm Shem Sedrick</h3>
			<h5>I'm a husband, father, and Software Engineer</h5>
			<IconRow>
				<LinkedIn url="https://www.linkedin.com/in/shemsedrick" />
				<Github url="https://github.com/ssedrick" />
			</IconRow>
		</Content>
	);
}

