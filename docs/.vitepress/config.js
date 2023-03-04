export default {
	lang: 'en-US',
	title: 'leaderboardsgg Infosite',
	description: 'A infosite for leaderboards.gg with the VitePress and Netlify CMS config.',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'Discord', link: 'https://discord.leaderboards.gg/' },
			{ text: 'Donate', link: 'https://opencollective.com/leaderboardsgg' },
			{ text: 'Code of Conduct', link: 'https://info.leaderboards.gg/code-of-conduct' },
			{ text: 'Contribute', link: 'https://info.leaderboards.gg/contribute' },
		],
		footer: {
			message: '<a href="https://www.netlify.com"><img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /></a>',
			copyright: 'Copyright'
		  }
	}
}