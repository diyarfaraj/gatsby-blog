import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
	return (
		<Layout>
			<h1> Hej.</h1>
			<h2>Vi är den hjälpande handen i din digitala tillväxt.</h2>

			<p>
				Behöver du hemsida? Konakta <Link to="/contact">oss</Link> <br />
				<br />
				<small>Den här hemsidan är under byggnation! ⚒😉</small>
			</p>
		</Layout>
	);
};

export default IndexPage;
