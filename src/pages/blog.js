import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
	const BlogData = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
					}
				}
			}
		}
	`);

	console.log(BlogData);

	return (
		<Layout>
			<h1>My Blog</h1>
			<p>Post will show up here</p>
		</Layout>
	);
};

export default BlogPage;
