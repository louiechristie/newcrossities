require("dotenv").config({
  path: `.env`,
})

const siteMetadata = {
  title: `Newcrossities`,
  description: "A funny guide to South London [Beta]",
  author: `Louie Christie`,
  siteUrl: `https://www.newcrossities.com/`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `${process.env.CMS_URL}/graphql`,
      },
    },
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
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: `${process.env.CMS_URL}`,
        uploadsUrl: `${process.env.CMS_URL}/wp-content/uploads/`,
        processPostTypes: ["Page"],
        graphqlTypeName: "WPGraphQL",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#db0000`,
        theme_color: `#db0000`,
        display: `minimal-ui`,
        icon: `src/images/newcrossities-icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    "gatsby-plugin-instagram-embed",
    "gatsby-plugin-twitter",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
