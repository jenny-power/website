export const profile = {
	fullName: 'Jenny Power',
	title: 'Mathematician',
	institute: 'Heriot-Watt University',
	author_name: 'Jenny Power', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{ title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{ title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{ title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
	pronouns: 'she/her',
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'j.power@hw.ac.uk',
	linkedin: 'https://www.linkedin.com/in/jennifer-power-816b07149/',
	instagram: 'https://www.instagram.com/thejennypowerhour/',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0002-0951-3852',
}

export const template = {
	website_url: 'https://jennypower.netlify.app/', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'jenny-light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'jenny-dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Jenny Power',
	default_description: 'Website for Dr Jenny Power, Mathematician',
	default_image: '/public/pixel.svg',
}
