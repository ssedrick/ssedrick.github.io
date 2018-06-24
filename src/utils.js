import { css } from 'styled-components';

export const media = {
	handheld: (...args) => css`
		@media (max-width: 768px) {
			${ css(...args) }
		}
	`,
};

export const colors = {
	blue: {
		darker: '#163d64',
		blue: 'blue',
	},
	white: {
		white: '#f5f5f5',
	}
}

