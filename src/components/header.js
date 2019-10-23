import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';

//Display dynamic info
const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	//Header nav
	return (
		<header className={headerStyles.header}>
			<h1>
				<Link className={headerStyles.title} to="/">
					{data.site.siteMetadata.title}
				</Link>
			</h1>
			<nav>
				<ul className={headerStyles.navList}>
					<li>
						<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
							Hem
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.activeNavItem}
							to="/contact"
						>
							Kontakt
						</Link>{' '}
					</li>
					<li>
						<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">
							Om oss
						</Link>{' '}
					</li>
					<li>
						<Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">
							Blogg
						</Link>{' '}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
