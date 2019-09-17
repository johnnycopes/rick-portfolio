import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "../styles/templates/about.module.scss"
import Layout from "../components/Layout"
import FadeWrapper from "../components/FadeWrapper"
import Button from "../components/Button"
import ExternalLink from "../components/ExternalLink";

const AboutTemplate = ({ data, transitionStatus }) => {
  const about = data.markdownRemark.frontmatter
  return (
    <Layout
      verticallyCentered={true}
      horizontallyCentered={true}
      >
      <FadeWrapper status={transitionStatus}>
        <div className={styles.about}
          >
          <Img
            className={styles.pic}
            fluid={about.image.childImageSharp.fluid}
            alt="Rick Segal"
          />
          <div className={styles.bio}>
            <h2 className={styles.greeting}>
              Hey, it's me — Rick.
            </h2>
            <div className={styles.buttons}>
              <ExternalLink link={about.resume.publicURL}>
                <Button>résumé</Button>
              </ExternalLink>
              <ExternalLink link="https://www.linkedin.com/in/rsegal">
                <Button>linkedin</Button>
              </ExternalLink>
              <ExternalLink link="https://www.instagram.com/riiyaack">
                <Button>instagram</Button>
              </ExternalLink>
              <ExternalLink link="https://www.wikipedia.org">
                <Button>learn too much</Button>
              </ExternalLink>
            </div>
            <ExternalLink link="mailto:risegal4@gmail.com">
              <h4>risegal4@gmail.com</h4>
            </ExternalLink>
          </div>
        </div>
      </FadeWrapper>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        resume {
          publicURL
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default AboutTemplate