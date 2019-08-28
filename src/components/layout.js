import React from "react"
import PropTypes from "prop-types"

import styles from "../styles/components/layout.module.scss"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.content}>
      {children}
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
