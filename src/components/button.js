import React from "react"
import PropTypes, { node } from "prop-types"

import styles from "../styles/components/Button.module.scss"

const Button = ({ children }) => (
  <button className={styles.button}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired
}

export default Button