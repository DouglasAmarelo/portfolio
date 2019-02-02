import React from 'react';

const Footer = () => (
	<footer
		className="hero"
		style={{
			background: '#f5f5f5',
			padding: '1.5rem 1.5rem'
		}}
	>
		<div className="has-shadow"></div>
		<div className="content has-text-centered">
			<p>
				© {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
			</p>
		</div>
	</footer>
)

export default Footer