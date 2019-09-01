import React from "react"
import styles from "../styles/components/ProjectTile.module.scss"

const ProjectTile = ({ title, headline }) => (
  <div className={styles.tile}>
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

export default ProjectTile