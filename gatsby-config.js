module.exports = {
  siteMetadata: {
    title: "claudecreighton",
    siteUrl: "https://claudecreighton.art"
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
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /assets/
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#fcdada`,
        // Disable the loading spinner.
        showSpinner: true,
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
    'gatsby-plugin-breakpoints',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/icon.svg",
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
