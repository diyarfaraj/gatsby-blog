import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout>
			<h1> Diyar Faraj Blog</h1>
			<h2>I'm Diyar</h2>

			<p>
				Need a developer? contact <Link to="/contact">Me</Link>{' '}
			</p>
		</Layout>
	);
};

export default IndexPage;
