import React from "react"
import { Link } from "gatsby"
import cx from "classnames"

import styles from "../styles/components/Link.module.scss"

const InternalLink = ({ link, className, children }) => (
  <Link className={cx(styles.link, className)}
    activeClassName={styles.active}
    to={link}
    >
    {children}
  </Link>
)

export default InternalLink