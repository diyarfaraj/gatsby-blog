import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
	const BlogData = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="Blogg" />
			<h1>Vår Blog</h1>
			<ol className={blogStyles.posts}>
				{BlogData.allContentfulBlogPost.edges.map((edge) => {
					return (
						<li className={blogStyles.post}>
							<Link to={`/blog/${edge.node.slug}`}>
								<h2>{edge.node.title}</h2>
								<p>{edge.node.publishedDate}</p>
							</Link>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default BlogPage;
