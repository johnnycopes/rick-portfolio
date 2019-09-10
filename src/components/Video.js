import React from "react"
import PropTypes from "prop-types"

import styles from "../styles/components/Video.module.scss"

// TODO: refactor this to use Gatsby iframe/vimeo embed
const Video = ({ type, url }) => (
  <div className={styles.video}>
    <iframe
      src={url}
      title={url}
      frameborder='0'
      webkitAllowFullScreen
      mozallowfullscreen
      allowFullScreen>
    </iframe>
    <p className={styles.type}>
      {type}
    </p>
  </div>
)

Video.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default Video