import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout>
			<h1>Om GOTIS</h1>
			<p>
				Gothenburg Interactive Solutions är en digital webbbyrå. <Link to="/contact">Kontaka oss</Link>
			</p>
		</Layout>
	);
};

export default AboutPage;
