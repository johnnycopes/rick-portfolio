import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import styles from "../styles/templates/misc.module.scss"
import Layout from "../components/Layout"
import ExternalLink from "../components/ExternalLink"

const MiscTemplate = ({ data }) => (
  <Layout
    verticallyCentered={true}
    horizontallyCentered={true}
    >
    <h2 class={styles.header}>
      Random things that I like:
    </h2>
    <div class={styles.links}>
      <ExternalLink className={styles.link}
        link=""
        >
        Website that I like: <span className={styles.link__name}>[website name]</span>
      </ExternalLink>
      <ExternalLink className={styles.link}
        link=""
        >
        Song that I like: <span className={styles.link__name}>[song artist] — [song name]</span>
      </ExternalLink>
      <ExternalLink className={styles.link}
        link=""
        >
        Instagram that I like: <span className={styles.link__name}>@[instagram]</span>
      </ExternalLink>
    </div>
    <button className={styles.button}>
      <Img fluid={data.file.childImageSharp.fluid} />
    </button>
  </Layout>
)

export const query = graphql`
  query MiscQuery {
    file(name: {eq: "khaled"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default MiscTemplate
