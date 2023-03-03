module.exports = {
	title: 'Infosite',
	description: 'A infosite for leaderboards.gg with the VitePress and Netlify CMS config.',
	themeConfig: {
		repo: 'squiddot/infosite-vitepress-netlifycms',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
		],
	}
}