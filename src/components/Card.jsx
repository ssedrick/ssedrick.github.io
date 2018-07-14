import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUICard from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = {
	card: {
		maxWidth: '350px',
	},
	media: {
		height: 0,
		paddingTop: '56%',
	}
}

const Card = ({ data, classes }) => (
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
		<CardActions>
			<Button href={data.url}>
				{data.action}
			</Button>
		</CardActions>
	</MUICard>
);

export default withStyles(styles)(Card);
