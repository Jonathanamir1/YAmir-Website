import type { Config } from 'tailwindcss';

import svgToDataUri from 'mini-svg-data-uri';

import colors from 'tailwindcss/colors';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				shimmer: 'shimmer 2s linear infinite',
			},
			keyframes: {
				shimmer: {
					from: {
						backgroundPosition: '0 0',
					},
					to: {
						backgroundPosition: '-200% 0',
					},
				},
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'], // This will be your main font
				raleway: ['Raleway', 'sans-serif'], // Secondary font
				klemer: ['Klemer', 'sans-serif'], // Add your custom font
			},
			colors: {
				black: {
					DEFAULT: '#000',
					100: '#000319',
				},
				primary: '#282a29',
				secondary: '#f6f4eb',
				accent: '#f4a261', // Light Pumpkin
				warm: '#e8c3a1', // Peach Beige
				highlight: '#f9d8c2', // Delicate Apricot
				gray: '#909090', // Soft Gray
				hero: '#D7D7D7',
				icon: '#C4C4C4',
			},
		},
	},
	plugins: [
		function ({ matchUtilities, theme }: any) {
			matchUtilities(
				{
					'bg-grid': (value: unknown) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-grid-small': (value: unknown) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
					'bg-dot': (value: unknown) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
						)}")`,
					}),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			);
		},
	],
} satisfies Config;
