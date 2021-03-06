import React from "react"
import { graphql } from "gatsby"

import styles from "../styles/templates/project.module.scss"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import InternalLink from "../components/InternalLink"
import Button from "../components/Button"
import Video from "../components/Video"
import Carousel from "../components/Carousel"
import FadeWrapper from "../components/FadeWrapper"

const ProjectTemplate = ({ data, transitionStatus }) => {
  const project = data.markdownRemark
  const videos = project.frontmatter.videos || []
  const images = project.frontmatter.images || []
  return (
    <Layout>
      <SEO title={project.frontmatter.title} />
      <FadeWrapper status={transitionStatus}>
        <div className={styles.header}>
          <InternalLink className={styles.back}
            link="/work"
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
        {videos.map((video, index) => (
          <div className={styles.video}
            key={index}
            >
            <Video
              type={video.type}
              url={video.url}
            />
          </div>
        ))}
        {images.length > 0 &&
          <Carousel images={images} />
        }
      </FadeWrapper>
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
        images {
          childImageSharp {
            fluid(maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplate