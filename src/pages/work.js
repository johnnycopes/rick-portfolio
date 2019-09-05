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
          title={node.frontmatter.title}
          headline={node.frontmatter.headline}
        />
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
        }
      }
      totalCount
    }
  }
`

export default WorkPage