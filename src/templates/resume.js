import React from "react"
import { graphql } from "gatsby"

import styles from "../styles/templates/resume.module.scss"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import FadeWrapper from "../components/FadeWrapper"

const ResumeTemplate = ({ data, transitionStatus }) => {
  const resume = data.markdownRemark.frontmatter.resume.publicURL
  return (
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
    >
      <SEO title="resume" />
      <FadeWrapper status={transitionStatus}>
        <div className={styles.wrapper}>
          <iframe className={styles.resume}
            title="RickSegalResume"
            src={resume}
            >
          </iframe>
        </div>
      </FadeWrapper>
    </Layout>
  )
}

export const query = graphql`
  query ResumeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        resume {
          publicURL
        }
      }
    }
  }
`

export default ResumeTemplate