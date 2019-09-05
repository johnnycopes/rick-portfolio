import React from "react"

import styles from "../styles/components/Video.module.scss"

const Video = ({ type, url }) => (
  <div className={styles.video}>
    <iframe
      src={url}
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

export default Video