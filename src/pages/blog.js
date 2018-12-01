import React from "react";
import cautiousDog from "../images/big_educated.jpg";
import Layout from '../components/layout';
const BlogPage = ({data}) => (
<Layout>
<div className="wrapping home blog-sec">
<div className="third-wrap">
<div className="two-thirds">
<h3>Blog</h3>
{data.allMarkdownRemark.edges.map(post => (
<ul>
	<li className="li-blog">
	<h4 className="blogTitle"><a href={post.node.frontmatter.path}>{post.node.frontmatter.title}</a></h4>
	<p>{post.node.excerpt}</p>
	<p><a className="bg-cs rm" href={post.node.frontmatter.path}>Read More</a></p>
	</li>
</ul>
	))}
</div>
<div className="one-third">
<img src={cautiousDog} alt="sidebar-img"/>
</div>
</div>
</div>
</Layout>
)
export const pageQuery = graphql`
  query IndexQuery {
allMarkdownRemark(limit: 10){
  edges{
    node{
      excerpt
      frontmatter{
        title
        path
      }
    }
  }
}
  }
`;
export default BlogPage