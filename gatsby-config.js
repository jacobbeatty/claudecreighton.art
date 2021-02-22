module.exports = {
  siteMetadata: {
    title: "claudecreighton",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          `Manrope: 400, 700`,
          `Newsreader: 400, 400i, 500, 600, 500i,700,700i `
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "sJxkvpsSa4tV85ctNd_WIDPifD8JqoE2lDjy96hnM7A",
        spaceId: "9dgxwz4ets7j",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "XXXX",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/icon.png",
      },
    },
    `gatsby-plugin-transition-link`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/other",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "art",
        path: "./src/images/art",
      },
      __key: "art",
    },




  ],
};
