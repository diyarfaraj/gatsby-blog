import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = () => {
	return (
		<div>
			<Header />
			<h1> Contact Diyar</h1>
			<p>
				Best way to reach Diyar is throush his{' '}
				<a target="_blank" href="https://twitter.com/diyarfaraj">
					Twitter
				</a>
			</p>
			<Footer />
		</div>
	);
};

export default ContactPage;
