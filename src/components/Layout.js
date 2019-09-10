import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "../styles/components/Layout.module.scss"
import Header from "./Header"

const Layout = ({ verticallyCentered, children }) => (
  <>
    <Header />
    afj
    <div className={styles.wrapper}>
      <div className={cx(
        styles.content,
        { [styles.verticallyCentered]: verticallyCentered }
      )}>
        {children}
      </div>
    </div>
  </>
)

Layout.propTypes = {
  verticallyCentered: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout