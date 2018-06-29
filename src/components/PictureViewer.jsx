import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { media, colors } from 'utils';
import quotes from '../../data/quotes.json';

const Column = styled.div`
	background-color: ${colors.grey.darker};
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30vw;
	margin: 5vh;
	margin-right: 0vh;
	overflow-y: hidden;
	${ media.handheld`
		flex-direction: row;
		width: 100vw;
		margin: 5vw;
		margin-bottom: 0vw;
	` }
`;

const Img = styled.img`
	max-width: 100%;
	max-height: 85vh;
	${ media.handheld`
		flex: 1;
		height: inherit;
		min-width: 44vw;
		margin: 3vw;
	` }
`;

const Quote = styled.h6`
	margin: 5px;
	text-align: center;
	justify-content: center;
	color: ${colors.white.white}
	white-space: pre-wrap;
	${ media.handheld`
		flex: 1;
		padding: 5vw;
		margin: 8%
	` }
`;

const Attribution = styled.p`
	visibility: hidden;
	position: absolute;
`;

export default class PictureViewer extends PureComponent {
	getRandomInt(limit) {
		return Math.floor(Math.random() * limit);
	}
	render() {
		const quoteIndex = this.getRandomInt(quotes.length);
		return (
			<Column>
				<Img src="images/profile.jpg" alt="Shem Sedrick"/>
				<Quote>
					{quotes[quoteIndex]}
				</Quote>
				<Attribution>
					Quotes retrieved from:<br />
					https://medium.com/statuscode/ten-inspiring-programming-quotes-7c2fe1b2e79a<br />
					http://quotes.cat-v.org/programming/ <br />
					http://www.junauza.com/2010/12/top-50-programming-quotes-of-all-time<br />
				</Attribution>
			</Column>
		);
	}
}
