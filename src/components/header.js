import { Link } from 'gatsby';
import PropTypes from 'prop-types'
import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isMenuOpen : false
		};
	}

	handleMenu = () => {
		this.setState(previousSate => ({
			isMenuOpen: !previousSate.isMenuOpen
		}));
	}

	render = () => {
		const { siteTitle } = this.props;
		const { isMenuOpen } = this.state;
		const burgerClass = isMenuOpen ? 'is-active' : '';

		return (
			<nav className="navbar" role="navigation" aria-label="main navigation">
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item is-size-4">
							{siteTitle}
						</Link>

						<button
							className={`navbar-burger ${burgerClass}`}
							type="button"
							aria-label="menu"
							onClick={this.handleMenu}
						>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</button>
					</div>
					<div className={`navbar-menu ${burgerClass}`}>
						<div className="navbar-end">
							<Link to="/">Home</Link>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}


Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
