import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

// import Header from './header'
// import './layout.css'
import '../styles/index.scss';
import Footer from './footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={`${data.site.siteMetadata.title} | ${data.site.siteMetadata.description}`}
          meta={[
            {
              name: 'description',
              content: 'Front-end developer',
            },
            {
              name: 'keywords',
              content: 'Front-end, javaScript, css, html',
            },
          ]}
        >
          <html lang="pt-BR" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/brands.css"
            integrity="sha384-BKw0P+CQz9xmby+uplDwp82Py8x1xtYPK3ORn/ZSoe6Dk3ETP59WCDnX+fI1XCKK"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/fontawesome.css"
            integrity="sha384-4aon80D8rXCGx9ayDt85LbyUHeMWd3UiBaWliBlJ53yzm9hqN21A+o1pqoyK04h+"
            crossorigin="anonymous"
          />
          <meta
            name="google-site-verification"
            content="YD5y4cRKEvX2ZN4nL9pVmYXWNAK3TR0Z5341d1k9OEM"
          />
          {/* Primary Meta Tags */}
          <title>Douglas 'Amarelo' Lopes | Front-end developer</title>
          <meta
            name="title"
            content="Douglas 'Amarelo' Lopes | Front-end developer"
          />
          <meta
            name="description"
            content="Sou desenvolvimento front-end desde 2010. Já participei de grandes projetos para clientes como, Whirlpool Brasil e Whirlpool Latam (Brastemp, Consul, Compra Certa, KitchenAid e Whirlpool), Sony, Itaú, Honda, Microsoft, Ambev, B.blend, Amazon, Terra, Editora Globo, Banco do Brasil, Contém 1g, L'Occitane entre muitos outros."
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://douglasamarelo.com/" />
          <meta
            property="og:title"
            content="Douglas 'Amarelo' Lopes | Front-end developer"
          />
          <meta
            property="og:description"
            content="Sou desenvolvimento front-end desde 2010. Já participei de grandes projetos para clientes como, Whirlpool Brasil e Whirlpool Latam (Brastemp, Consul, Compra Certa, KitchenAid e Whirlpool), Sony, Itaú, Honda, Microsoft, Ambev, B.blend, Amazon, Terra, Editora Globo, Banco do Brasil, Contém 1g, L'Occitane entre muitos outros."
          />
          <meta property="og:image" content="/images/douglasamarelo.com.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://douglasamarelo.com/" />
          <meta
            property="twitter:title"
            content="Douglas 'Amarelo' Lopes | Front-end developer"
          />
          <meta
            property="twitter:description"
            content="Sou desenvolvimento front-end desde 2010. Já participei de grandes projetos para clientes como, Whirlpool Brasil e Whirlpool Latam (Brastemp, Consul, Compra Certa, KitchenAid e Whirlpool), Sony, Itaú, Honda, Microsoft, Ambev, B.blend, Amazon, Terra, Editora Globo, Banco do Brasil, Contém 1g, L'Occitane entre muitos outros."
          />
          <meta
            property="twitter:image"
            content="/images/douglasamarelo.com.png"
          />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <div>{children}</div>

        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
