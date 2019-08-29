import React from "react"

import styles from "../styles/pages/about.module.scss"
import Layout from "../components/layout"
import Button from "../components/button"
import ExternalLink from "../components/external-link";

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
          <ExternalLink link="https://www.linkedin.com/in/rsegal">
            <Button>résumé</Button>
          </ExternalLink>
          <ExternalLink link="https://www.linkedin.com/in/rsegal">
            <Button>linkedin</Button>
          </ExternalLink>
          <ExternalLink link="https://www.instagram.com/riiyaack">
            <Button>instagram</Button>
          </ExternalLink>
          <ExternalLink link="https://www.wikipedia.org">
            <Button>learn too much</Button>
          </ExternalLink>
        </div>
        <ExternalLink link="mailto:risegal4@gmail.com">
          <h4>risegal4@gmail.com</h4>
        </ExternalLink>
      </div>
    </div>
  </Layout>
)

export default AboutPage