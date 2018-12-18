import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import MUICard from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = {
	card: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	media: {
		height: 0,
		paddingTop: '56%',
	},
	content: {
		overflow: 'auto',
		paddingBottom: '15px',
	},
	actions: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	icon: {
		marginLeft: 'auto',
	},
};

const FlipContainer = styled.div`
	position: relative;
	perspective: 1000px;
	width: 300px;
	height: 400px;
	margin: 1vw;
`;

const Flipper = styled.div`
	transition: 0.6s;
	transform-style: preserve-3d;

	position: absolute;
	width: 100%;
	height: 100%;

	transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : '')};
`;

const Front = styled.div`
  backface-visibility: hidden;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	z-index: 2;
	transform: rotateY(0deg);
`;
const Back = styled.div`
  backface-visibility: hidden;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	transform: rotateY(180deg);
`;

class Card extends React.PureComponent {
	state = {
		isFlipped: false,
	}

	flip = () => {
		this.setState((state) => ({ isFlipped: !state.isFlipped }));
	}

	render () {
		const { data, classes } = this.props;
		const { isFlipped } = this.state;
		return (
			<FlipContainer>
				<Flipper isFlipped={isFlipped}>
					<Front>
						<MUICard className={classes.card}>
							<CardMedia
								className={classes.media}
								image={data.imageUrl}
								title={data.title}
							/>
							<CardHeader
								title={data.name}
							/>
							<CardContent>
								{data.shortDescription}
							</CardContent>
							<CardActions
								className={classes.actions}
							>
								<Button href={data.url}>
									{data.action}
								</Button>
								<i
									className="material-icons"
									onClick={this.flip}
									style={styles.icon}
								>
									flip_to_back
								</i>
							</CardActions>
						</MUICard>
					</Front>
					<Back>
						<MUICard className={classes.card}>
							<CardHeader
								title={data.name}
							/>
							<CardContent className={classes.content}>
								{data.description.map(line => (<p>{line}</p>))}
							</CardContent>
							<CardActions>
								<i
									className="material-icons"
									onClick={this.flip}
									style={styles.icon}
								>
									flip_to_front
								</i>
							</CardActions>
						</MUICard>
					</Back>
				</Flipper>
			</FlipContainer>
		);
	}
}

export default withStyles(styles)(Card);
