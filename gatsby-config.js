module.exports = {
  siteMetadata: {
    title: `Pedro Pimenta`,
    description: `Front end developer & designer.`,
    author: `@pimenta.co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://admin.pimenta.co`,
        queryLimit: 100, // Default to 100
        contentTypes: [`projects`],
        //If using single types place them in this array.
        singleTypes: [`home`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        domainId: '292bb1a5-8025-407b-bfec-556c72291998',
        server: 'https://analytics.pimenta.co',
        ignoreLocalhost: true,
        detailed: true
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
