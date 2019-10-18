//using built path module, to extract the file name of the node file path(see slug below)
const path = require('path');

//Getting the specifik node we are looking for
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

//Create pages for every node/slug/plogpage
module.exports.createPages = () => {
	//TEXT HÄR
};
