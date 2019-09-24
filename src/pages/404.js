import React from "react"
import styles from "../styles/pages/404.module.scss"

import Layout from "../components/Layout"
import InternalLink from "../components/InternalLink"
import Button from "../components/Button"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout 
    verticallyCentered={true}
    horizontallyCentered={true}
    >
    <SEO title="404 error" />
    <div className={styles.text}>
      <h1 className={styles.header}>404 error</h1>
      <p>This page doesn't exist.</p>
    </div>
    <InternalLink link="/">
      <Button>
        back to home
      </Button>
    </InternalLink>
  </Layout>
)

export default NotFoundPage
