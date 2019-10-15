import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout>
			<h1>About Diyar</h1>
			<p>
				Diyar is a developer! <Link to="/contact">Contact me</Link>
			</p>
		</Layout>
	);
};

export default AboutPage;
