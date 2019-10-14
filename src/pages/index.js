import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
	return (
		<div>
			<h1> Diyar Faraj Blog</h1>
			<h2>I'm Diyar</h2>

			<p>
				Need a developer? contact <Link to="/contact">Me</Link>{' '}
			</p>
		</div>
	);
};

export default IndexPage;
