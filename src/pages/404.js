import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<section className="hero is-dark is-medium is-bold is-size-6">
			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title">NOT FOUND</h1>
					<p className="content">You just hit a route that doesn&#39;t exist... the sadness.</p>
				</div>
			</div>
		</section>
	</Layout>
);

export default NotFoundPage;
