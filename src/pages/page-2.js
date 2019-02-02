import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
	<Layout>
		<section className="section">
			<div className="container">
				<SEO title="Page two" />
				<h1>Hi from the second page</h1>
				<p>Welcome to page 2</p>
				<Link to="/">Go back to the homepage</Link>
			</div>
		</section>
	</Layout>
)

export default SecondPage
