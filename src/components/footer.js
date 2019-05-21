import React from 'react';
import '../components/footer.scss';

const Footer = () => (
	<footer className="footer hero is-dark">
		<div className="has-text-centered">
			<p>
				Built with&nbsp;

				<span className="has-text-danger" role="img" aria-label="amor">❤</span> and&nbsp;

				<a
					style={{
						textDecoration: 'underline'
					}}
					href="https://www.gatsbyjs.org"
					title="Gatsby"
					target="_blank"
					rel="noopener noreferrer"
				>
					Gatsby
				</a>&nbsp;

				{/* and hosted by&nbsp;

				<a
					style={{
						textDecoration: 'underline'
					}}
					href="https://www.netlify.com/"
					title="Netlify"
					target="_blank"
					rel="noopener noreferrer"
				>
					Netlify
				</a> */}

				&nbsp; - &copy; {new Date().getFullYear()}
			</p>
		</div>
	</footer>
)

export default Footer