import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
	return (
		<Layout>
			<Head title="Kontakt" />
			<h1> Kontaka Oss</h1>
			<p>
				Lättast att nå oss är genom att skicka ett mejl till {' '}
				<a href="mailto: contact@gotis.se">contact@gotis.se</a>
			</p>
		</Layout>
	);
};

export default ContactPage;
