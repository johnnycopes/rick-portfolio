import React from "react"

import styles from "../styles/pages/about.module.scss"
import Layout from "../components/layout"
import Button from "../components/button"

const AboutPage = () => (
  <Layout>
    <div className={styles.about}>
      <img className={styles.pic}
        src="assets/img/rick_prof_pic.jpeg"
        alt="Rick Segal"
      />
      <div className={styles.bio}>
        <h2 className={styles.greeting}>
          Hey, it's me — Rick.
        </h2>
        <div className={styles.buttons}>
          <a href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>résumé</Button>
          </a>
          <a href="https://www.linkedin.com/in/rsegal"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button>linkedin</Button>
          </a>
          <a href="https://www.instagram.com/riiyaack"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button>instagram</Button>
          </a>
          <a href="https://www.wikipedia.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button>learn too much</Button>
          </a>
        </div>
        <a className={styles.email}
          href="mailto:risegal4@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          <h4>risegal4@gmail.com</h4>
        </a>
      </div>
    </div>
  </Layout>
)

export default AboutPage
