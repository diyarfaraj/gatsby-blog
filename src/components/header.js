import React from 'react';
import { Link } from 'gatsby';
/* import IndexPage from 'index';
import BlogPage from 'blog'; */

const Header = () => {
	return (
		<header>
			<h1>Diyar Faraj</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/contact">contact</Link>{' '}
					</li>
					<li>
						<Link to="/about">Abour</Link>{' '}
					</li>
					<li>
						<Link to="/blog">Blog</Link>{' '}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
