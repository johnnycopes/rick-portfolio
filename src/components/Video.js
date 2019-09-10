import React from "react"
import PropTypes from "prop-types"

import styles from "../styles/components/Video.module.scss"

const Video = ({ type, url }) => (
  <>
    <div className={styles.video}>
      <iframe
        src={url}
        title={url}
        frameborder='0'
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen>
      </iframe>
    </div>
    <p className={styles.type}>
      {type}
    </p>
  </>
)

Video.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default Video