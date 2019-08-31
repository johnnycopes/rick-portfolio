import React from "react"
import styles from "../styles/components/Button.module.scss"

const Button = ({ children }) => (
  <button className={styles.button}>
    {children}
  </button>
)

export default Button