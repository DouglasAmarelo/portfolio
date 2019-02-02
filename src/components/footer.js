import React from 'react'

const Footer = () => (
	<footer
		className="footer"
		style={{
			background: `#f1f1f1`,
			padding: '3rem 1.5rem'
		}}
	>
		<div className="content has-text-centered">
			<p>
				© {new Date().getFullYear()}, lorem Built with
				{` `}

				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</p>
		</div>
	</footer>
)

export default Footer