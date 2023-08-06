/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'h-pattern-D': "url('/assets/Intro-component-with-sign-up-form/bg-intro-desktop.png')",
				'h-pattern-M': "url('/assets/Intro-component-with-sign-up-form/bg-intro-mobile.png')",
			},
			colors: {
				"pRed": "hsl(0, 100%, 74%)",
				"pGreen": "hsl(154, 59%, 51%)",
				"pGreenDark": "#32ba7f",
				"pBlue": "hsl(248, 32%, 49%)",
				"pDarkBlue": "hsl(249, 10%, 26%)",
				"pGrayishBlue": "hsl(246, 25%, 77%)"
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif']
			},
			height: {
				"40": "clamp(40rem, 100vh, 70rem)",
			},
			boxShadow: {
				"pShadow": "0px 5px 0px 0px rgba(0, 0, 0, 0.2)"
			},
			screens: {
				"3xl": "1350px",
			}
		},
	},
	plugins: [],
}
