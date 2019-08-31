import React from "react"
import cx from "classnames"

import styles from "../styles/components/Link.module.scss"

const ExternalLink = ({ link, className, children }) => (
  <a className={cx(styles.link, className)}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    >
    {children} 
  </a>
)

export default ExternalLink