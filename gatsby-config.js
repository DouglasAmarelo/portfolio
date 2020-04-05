module.exports = {
  siteMetadata: {
    title: `Douglas 'Amarelo' Lopes | Front-end developer`,
    description: `Sou desenvolvimento front-end desde 2010. Já participei de grandes projetos para clientes como, Whirlpool Brasil e Whirlpool Latam (Brastemp, Consul, Compra Certa, KitchenAid e Whirlpool), Sony, Itaú, Honda, Microsoft, Ambev, B.blend, Amazon, Terra, Editora Globo, Banco do Brasil, Contém 1g, L'Occitane entre muitos outros.`,
    author: `@DouglasAmarelo`,
    image: `/images/douglasamarelo.com.png`,
    twitterUsername: `@DouglasAmarelo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Douglas "Amarelo" Lopes`,
        short_name: `Douglas "Amarelo" Lopes`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/DouglasLopes.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-83956840-1',
        head: false,
      },
    },
  ],
};
