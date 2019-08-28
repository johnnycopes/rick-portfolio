import React from "react"
import { Link } from "gatsby"

import styles from "../styles/pages/index.module.scss"
import Button from "../components/button"

const IndexPage = () => (
  <div className={styles.home}>
    <h1 className={styles.name}>
      <span className={styles.accent}>Rick</span> Segal
    </h1>
    <div className={styles.links}>
      <Link className={styles.link}
        to="/work"
        >
        <Button>work</Button>
      </Link>
      <Link className={styles.link}
        to="/about"
        >
        <Button>about</Button>
      </Link>
      <Link className={styles.link}
        to="/misc"
        >
        <Button>
          <img className={styles.bird}
            src="assets/img/seagull.png"
            alt="Misc"
          />
        </Button>
      </Link>
    </div>
  </div>
)

export default IndexPage
