//using built path module, to extract the file name of the node file path(see slug below)
const path = require('path');

//------Getting the specifik node we are looking for--------
module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md');

		//now that we have extracted slug(only titel, create node field)
		createNodeField({
			node,
			name: 'slug',
			value: slug
		});
	}
};

//---------Create pages for every node/slug/plogpage----------------
module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	//1. get path to template
	const blogTemplate = path.resolve('./src/templates/blog.js');

	//2. Get markdown data
	const res = await graphql(`
    query {
     allContentfulBlogPost {
       edges {
         node {
           slug
         }
       }
     }
    }
  `);

	//3. Create and Render each page
	res.data.allContentfulBlogPost.edges.forEach((edge) => {
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		});
	});
};
