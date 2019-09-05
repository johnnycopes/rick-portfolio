import React from "react"
import { graphql } from "gatsby"

import styles from "../styles/pages/work.module.scss"
import Layout from "../components/Layout"
import ProjectTile from "../components/ProjectTile";
import InternalLink from "../components/InternalLink"

const WorkPage = ({ data }) => (
  <Layout>
    <div className={styles.work}>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <InternalLink link={node.fields.slug}>
          <ProjectTile
            key={index}
            title={node.frontmatter.title}
            headline={node.frontmatter.headline}
          />
        </InternalLink>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___order}) {
      edges {
        node {
          frontmatter {
            title
            headline
            thumbnail
            isActive
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

export default WorkPage