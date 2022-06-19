export const SITE = {
	title: '',
	description: 'McGill Robotics AUV main site',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		alt:
			'mcgill robotics logo, wrench in shape of letter M',
	},
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'WELCOME', header: true },
		{ text: 'About the Team', link: 'en/introduction' },
		{ text: 'Link Hub', link: 'en/hub' },

		{ text: 'Software Docs', header: true },
		{ text: 'Workflow', link: 'en/page-4' },

		{ text: 'Electrical Docs', header: true },
		{ text: 'Workflow', link: 'en/page-4' },
		{ text: 'Altium', link: 'en/page-4' },
		{ text: 'LTSpice', link: 'en/page-4' },


		{ text: 'Mechanical Docs', header: true },
		{ text: 'Workflow', link: 'en/page-4' },
	],
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
//export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
//export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

