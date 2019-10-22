import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
const NotFound = () => {
	return (
		<Layout>
			<Head title="404" />
			<h1>Sidan finns inte.</h1>
			<Link to="/">Tillbaka till huvudsidan</Link>
		</Layout>
	);
};

export default NotFound;
