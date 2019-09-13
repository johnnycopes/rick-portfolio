import React from "react"
import { graphql } from "gatsby"

import styles from "../styles/pages/work.module.scss"
import Layout from "../components/Layout"
import ProjectTile from "../components/ProjectTile";

const WorkPage = ({ data }) => (
  <Layout>
    <div className={styles.work}>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <ProjectTile
          key={index}
          link={node.fields.slug}
          title={node.frontmatter.title}
          headline={node.frontmatter.headline}
          image={node.frontmatter.thumbnail.childImageSharp.fluid}
        />
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query WorkQuery {
    allMarkdownRemark(
      sort: {fields: frontmatter___order},
      filter: {frontmatter: {templateKey: {eq: "project"}}}
    ) {
      edges {
        node {
          frontmatter {
            isActive
            title
            headline
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default WorkPage