import React, { PureComponent } from 'react';
import { string, object } from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components';
import { colors } from 'utils';

const Background = styled.div`
	padding: 10px;
	background-color: ${props => props.isSelected ?
		colors.white.white : colors.blue.darker};
	&:hover {
		background-color: ${colors.white.white};
	}
`;

const Icon = styled.i`
	color: ${props => props.isSelected ?
		colors.blue.darker : colors.white.white};
	${Background}:hover & {
		color: ${colors.blue.darker};
	}
`;


class NavItem extends PureComponent {
	static propTypes = {
		url: string,
		name: string,
		icon: string,
		location: object.isRequired,
	}
	render() {
		const { url, name, icon, location } = this.props;
		const isSelected = location.pathname === url;
		return (
			<Link to={url}>
				<Tooltip id='home tooltip' title={name}>
					<Background isSelected={isSelected}>
						<Icon
							isSelected={isSelected}
							className="material-icons"
						>
							{icon}
						</Icon>
					</Background>
				</Tooltip>
			</Link>
		);
	}
}

export default withRouter(NavItem);
