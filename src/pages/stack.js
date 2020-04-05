import React from 'react';
import Layout from '../components/layout';
import Helmet from 'react-helmet';

const Stack = () => (
  <Layout>
    <Helmet>
      <script
        async
        src="https://cdn1.stackshare.io/javascripts/client-code.js"
      ></script>
    </Helmet>
    <section className="hero is-dark is-medium is-bold is-size-6">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Stack</h1>
          <p className="content">
            Abaixo, compartilho minha stack no&nbsp;
            <a
              style={{
                textDecoration: 'underline',
              }}
              href="https://stackshare.io/"
              title="Stackshare"
              target="_black"
              rel="noopener noreferrer"
            >
              Stackshare
            </a>
          </p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <a
              href="https://embed.stackshare.io/stacks/embed/208c773a3edb51fdb8b262204d43a6"
              data-theme="light"
              data-layers="1,2,3,4"
              data-stack-embed="true"
              aria-hidden="true"
            >
              &nbsp;
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Stack;
