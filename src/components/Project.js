import React from "react"
import styles from "../styles/components/Project.module.scss"

const Project = ({ title, headline }) => (
  <div className={styles.project}>
    <div className={styles.splash}>
      <div className={styles.container}>
        <div className={styles.headline}>
          {headline}
        </div>
        <div className={styles.title}>
          {title}
        </div>
      </div>
    </div >
  </div >
)

export default Project