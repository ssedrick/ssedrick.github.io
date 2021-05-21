import React from 'react';
import styled from 'styled-components';
import { media } from '../utils';
import Content from './Content';
import { ScrollY } from './Overflow';
import CardList from '../components/CardList';
import projects from '../../data/projects.json';

const PortfolioContainer = styled.div`
	padding: 5vw;
	alignItems: center;

	${media.handheld`
		padding: 5vh;
	`}
`;

export default function Portfolio() {
	return (
		<Content>
			<ScrollY>
				<PortfolioContainer>
					<h2>Portfolio</h2>
					<hr />
					<CardList listItems={projects} title='Projects' />
				</PortfolioContainer>
			</ScrollY>
		</Content>
	);
}
