import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allFile.nodes.map((node) => (
        <GatsbyImage image={getImage(node)} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "full1000" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default BlogPage;
