module.exports = {
  siteMetadata: {
    title: 'NeonratedBeta',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Neonrated',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
	{
      resolve: `gatsby-source-filesystem`,
      options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
	  }
    },
	'gatsby-plugin-catch-links',
	'gatsby-transformer-remark',
	'gatsby-plugin-styled-components',
  ],
  pathPrefix: `/neonrated-beta`,
}
