import React from 'react';
import PropTypes from 'prop-types';

import SiteIcon from './SiteIcon';

export default function LinkedIn({ url }) {
	return (
		<SiteIcon url={url} name="LinkedIn" />
	);
}

LinkedIn.propTypes = {
	url: PropTypes.string.isRequired,
};
