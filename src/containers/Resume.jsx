import React, { Component } from 'react';
import styled from 'styled-components';
import Content from 'containers/Content';

const ResumeContainer = styled.iframe`
	width: 90%;
	height: 90%;
	border: 0;
	margin-bottom: 5vh;
`;

export default class Resume extends Component {
	render() {
		return (
			<Content>
				<h2 className="view-port-header">Resume</h2>
				<hr />
				<ResumeContainer src='https://onedrive.live.com/embed?cid=C9D9457F88E5A81E&resid=C9D9457F88E5A81E%214853&authkey=AM2Tbui0rLg39i0&em=2&wdStartOn=1'>
					This is an embedded
					<a target='_blank' href='https://office.com'>
						Microsoft Office
					</a>
					document, powered by 
					<a target='_blank' href='https://office.com/webapps'>
						Office Online
					</a>.
				</ResumeContainer>
			</Content>
		);
	}
};
