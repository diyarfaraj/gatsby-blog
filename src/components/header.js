import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {
	return (
		<header className={headerStyles.header}>
			<Link className={headerStyles.title} to="/">
				<h1>Gothenburg Interactive Solutions</h1>
			</Link>
			<nav>
				<ul className={headerStyles.navList}>
					<li>
						<Link className={headerStyles.navItem} to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className={headerStyles.navItem} to="/contact">
							Contact
						</Link>{' '}
					</li>
					<li>
						<Link className={headerStyles.navItem} to="/about">
							About
						</Link>{' '}
					</li>
					<li>
						<Link className={headerStyles.navItem} to="/blog">
							Blog
						</Link>{' '}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
