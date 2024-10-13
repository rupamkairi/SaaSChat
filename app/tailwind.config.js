const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: colors.slate[50],
				'focused-background': colors.white,

				guest: colors.slate[300],
				self: colors.slate[200],
				team: colors.slate[100]
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('tailwindcss-animate')
	]
};
