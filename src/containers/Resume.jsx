import React, { Component } from 'react';
import styled from 'styled-components';
import Content from 'containers/Content';

const ResumeContainer = styled.iframe`
	width: 90%;
	height: 90%;
	border: 0;
	margin-bottom: 5vh;
`;

export default function Resume() {
	return (
		<Content>
			<h2 className="view-port-header">Resume</h2>
			<hr />
       <ResumeContainer src='https://docs.google.com/document/d/e/2PACX-1vS81-dMBK-HPbJZi1dF4ctK8MVmjJS-TjAqNP7r4aKINgEdjh3I9FjVtSBFjS-eJfS_GIYbqdjS20eS/pub?embedded=true'>
				This is an embedded Google Doc
			</ResumeContainer>
		</Content>
	);
}
