import React from "react"
import { graphql } from "gatsby"

import styles from "../styles/pages/work.module.scss"
import Layout from "../components/Layout"
import Project from "../components/Project"

const WorkPage = ({ data }) => (
  <Layout>
    <div className={styles.work}>
      {data.allMarkdownRemark.edges.map(({ node }, index) => (
        <Project
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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            headline
            thumbnail
          }
        }
      }
      totalCount
    }
  }
`

export default WorkPage