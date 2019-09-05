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
        <div className={styles.project__info}>
          <p className={styles.project__headline}>
            {project.frontmatter.headline}
          </p>
          <p className={styles.title}>
            {project.frontmatter.title}
          </p>
        </div>
      </div>
      {project.frontmatter.videos.map((video, index) => (
        <Video
          key={index}
          type={video.type}
          url={video.url}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
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