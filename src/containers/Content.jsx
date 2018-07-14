import styled from 'styled-components';
import { colors, media } from 'utils';

export default styled.div`
	flex: 2;
	height: 85vh;
	width: 100%;
	background-color: ${colors.white.white}
	margin: 5vh;
	margin-left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${ media.handheld`
		margin: 5vw;
		margin-top: 0;
	` }
`;
