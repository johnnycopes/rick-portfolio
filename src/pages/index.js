import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "../styles/pages/index.module.scss"
import Name from "../components/Name"
import Button from "../components/Button"
import InternalLink from "../components/InternalLink"

const IndexPage = ({ data }) => (
  <div className={styles.home}>
    <h1 className={styles.name}>
      <Name />
    </h1>
    <div className={styles.links}>
      <InternalLink className={styles.link}
        link="/work"
        >
        <Button>work</Button>
      </InternalLink>
      <InternalLink className={styles.link}
        link="/about"
        >
        <Button>about</Button>
      </InternalLink>
      <InternalLink className={styles.link}
        link="/misc"
        >
        <Button>
          <Img className={styles.bird} fixed={data.file.childImageSharp.fixed} />
        </Button>
      </InternalLink>
    </div>
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "images/seagull.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
