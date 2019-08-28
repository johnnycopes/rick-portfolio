import React from "react"
import Button from "./button";
import styles from "../styles/components/button.module.scss"

const ButtonLink = props => (
  <a href={props.link}
    target="_blank"
    rel="noopener noreferrer"
    >
    <Button className={styles.button}>
      {props.children}
    </Button>
  </a>
)

export default ButtonLink