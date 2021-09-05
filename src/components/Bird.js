import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby";

import styles from "../styles/components/Bird.module.scss"

const Bird = () => {
  const data = useStaticQuery(graphql`
    query BirdQuery {
      file(name: { eq: "bird" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      className={styles.bird}
      fluid={data.file.childImageSharp.fluid}
    />
  )
}

export default Bird