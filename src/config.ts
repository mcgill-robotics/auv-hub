export const SITE = {
	title: 'AUV Documentation',
	description: 'McGill Robotics AUV Docs and Main Site',
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
		{ text: 'About the Team', link: 'auv/introduction' },
		{ text: 'Link Hub', link: 'auv/hub' },

		{ text: 'Software Docs', header: true },
		{ text: 'Workflow', link: 'auv/Software/Workflow' },

		{ text: 'Electrical Docs', header: true },
		{ text: 'Workflow', link: 'auv/Electrical/Workflow' },
		{ text: 'Altium', link: 'auv/Electrical/Altium' },
		{ text: 'LTSpice', link: 'auv/Electrical/LTSpice' },


		{ text: 'Mechanical Docs', header: true },
		{ text: 'Workflow', link: 'auv/Mechanical/Workflow' },
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

