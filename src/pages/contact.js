import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = () => {
	return (
		<Layout>
			<h1> Kontaka Oss</h1>
			<p>
				Just nu kan man endast kontakta grundaren Diyar Faraj på hans his{' '}
				<a target="_blank" href="https://twitter.com/diyarfaraj">
					Twitter
				</a>
			</p>
		</Layout>
	);
};

export default ContactPage;
