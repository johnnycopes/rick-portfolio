import React from "react"
import Proptypes from "prop-types"
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

ExternalLink.propTypes = {
  link: Proptypes.string.isRequired,
  className: Proptypes.string,
  children: Proptypes.node.isRequired,
}

export default ExternalLink