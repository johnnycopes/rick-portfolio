import React from "react"
import cx from "classnames"

import styles from "../styles/components/Video.module.scss"

const Video = ({ type, url }) => (
  <div className={styles.video}>
    <p>type: {type}</p>
    <p>url: {url}</p>
  </div>
)

export default Video