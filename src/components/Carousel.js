import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby";
import cx from "classnames"

import styles from "../styles/components/Carousel.module.scss"

const Carousel = ({ images }) => {
  const data = useStaticQuery(graphql`
    query CarouselQuery {
      file(name: { eq: "seagull" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={styles.carousel}>
      <Img
        className={cx(styles.arrow, styles.arrow__left)}
        fluid={data.file.childImageSharp.fluid}
      />
      {images.map((image, index) => (
        <Img
          className={styles.image}
          key={index}
          fluid={image.file.childImageSharp.fluid}
        />
      ))}
      <Img
        className={cx(styles.arrow, styles.arrow__right)}
        fluid={data.file.childImageSharp.fluid}
      />
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
}

export default Carousel