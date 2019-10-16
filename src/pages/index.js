import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout>
			<h1> Gothenburg Interactive Solutions</h1>
			<h2>The helping hand in your digital growth</h2>

			<p>
				Need a developer? contact <Link to="/contact">Us</Link>{' '}
			</p>
		</Layout>
	);
};

export default IndexPage;
