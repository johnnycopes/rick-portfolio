import React from "react"

import styles from "../styles/components/link.module.scss"

const ExternalLink = ({ link, className, children }) => (
  <a className={`${styles.link} ${className}`}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    >
    {children} 
  </a>
)

export default ExternalLink