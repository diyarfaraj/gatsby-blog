import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
	return (
		<div>
			<h1>About Diyar</h1>
			<p>
				Diyar is a developer! <Link to="/contact">Contact me</Link>
			</p>
		</div>
	);
};

export default AboutPage;
