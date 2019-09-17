import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "../styles/components/FadeWrapper.module.scss"

const FadeWrapper = ({ children, status }) => (
  <div className={cx(
    styles.wrapper,
    { [styles.entering]: status === "entering" },
    { [styles.enter]: status === "enter" },
    { [styles.exit]: status === "exiting" },
    )}>
    {children}
  </div>
)

FadeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
}

export default FadeWrapper
