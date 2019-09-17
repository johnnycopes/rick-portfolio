import React from "react"
import PropTypes from "prop-types"
import TransitionLink from "gatsby-plugin-transition-link"
import cx from "classnames"

import styles from "../styles/components/Link.module.scss"

const InternalLink = ({ link, className, children }) => (
  <TransitionLink className={cx(styles.link, className)}
    activeClassName={styles.active}
    to={link}
    entry={{
      length: 0.1 // necessary to override the slow default provided by TransitionLink
    }}
    >
    {children}
  </TransitionLink>
)

InternalLink.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default InternalLink