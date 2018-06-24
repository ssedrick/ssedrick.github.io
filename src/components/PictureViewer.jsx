import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30vw;
`;

const Img = styled.img`
	height: 85vh;
`;

export default class PictureViewer extends PureComponent {
	render() {
		return (
			<Column>
				<Img src="images/profile.jpg" alt="Shem Sedrick"/>
				<h6 style={{margin: "5px", textAlign: "center", color: "#f9f9f9"}}>The best thing about a boolean is even if you are wrong, you are only off by a bit. &nbsp; ~Anonymous</h6>
			</Column>
		);
	}
}
