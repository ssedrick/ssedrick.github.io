import React from 'react';
import PropTypes from 'prop-types';

import SiteIcon from './SiteIcon';

export default function GithubIcon({ url }) {
	return (
		<SiteIcon url={url} name="Github" />
	);
}

GithubIcon.propTypes = {
	url: PropTypes.string.isRequired,
};
