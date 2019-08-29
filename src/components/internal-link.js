import React from "react"
import { Link } from "gatsby"

import styles from "../styles/components/link.module.scss"

const InternalLink = ({ link, className, children }) => (
  <Link className={`${styles.link} ${className}`}
    activeClassName={styles.active}
    to={link}
    >
    {children}
  </Link>
)

export default InternalLink