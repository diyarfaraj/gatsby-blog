import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const AboutPage = () => {
	return (
		<div>
			<Header />
			<h1>About Diyar</h1>
			<p>
				Diyar is a developer! <Link to="/contact">Contact me</Link>
			</p>
			<Footer />
		</div>
	);
};

export default AboutPage;
