import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = () => {
	return (
		<Layout>
			<h1> Kontaka Oss</h1>
			<p>
				Lättast att nå oss är genom att skicka ett mejl till {' '}
				<a href="mailto: contact@gotis.se">contact@gotis.se</a>
			</p>
		</Layout>
	);
};

export default ContactPage;
