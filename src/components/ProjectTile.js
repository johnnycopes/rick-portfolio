import React from "react"
import PropTypes from "prop-types"

import styles from "../styles/components/ProjectTile.module.scss"
import InternalLink from "./InternalLink"
import BackgroundImage from "gatsby-background-image"

const ProjectTile = ({ link, title, headline, image }) => (
  <InternalLink link={link}>
    <BackgroundImage
      className={styles.tile}
      fluid={image}
      alt={title}
      >
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.headline}>
            {headline}
          </div>
          <div className={styles.title}>
            {title}
          </div>
        </div>
      </div >
    </BackgroundImage>
  </InternalLink>
)

ProjectTile.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  headline: PropTypes.string,
  image: PropTypes.object.isRequired,
}

export default ProjectTile