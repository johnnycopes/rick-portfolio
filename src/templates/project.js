import React from "react"
import { graphql } from "gatsby"

import styles from "../styles/templates/project.module.scss"
import Layout from "../components/Layout"
import InternalLink from "../components/InternalLink"
import Button from "../components/Button"
import Video from "../components/Video"

const ProjectTemplate = ({ data }) => {
  const project = data.markdownRemark
  return (
    <Layout>
      <div className={styles.header}>
        <InternalLink className={styles.back}
          link="work"
          >
          <Button>back to work</Button>
        </InternalLink>
        <div className={styles.info}>
          <p className={styles.headline}>
            {project.frontmatter.headline}
          </p>
          <p className={styles.title}>
            {project.frontmatter.title}
          </p>
        </div>
      </div>
      {project.frontmatter.videos.map((video, index) => (
        <div className={styles.video}>
          <Video
            key={index}
            type={video.type}
            url={video.url}
          />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        headline
        videos {
          type
          url
        }
      }
    }
  }
`

export default ProjectTemplate