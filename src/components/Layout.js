import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import styles from "../styles/components/Layout.module.scss"
import Header from "./Header"

const Layout = ({ children, verticallyCentered, horizontallyCentered }) => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <div className={cx(
        styles.content,
        { [styles.verticallyCentered]: verticallyCentered },
        { [styles.horizontallyCentered]: horizontallyCentered },
        )}>
        {children}
      </div>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  verticallyCentered: PropTypes.bool,
  horizontallyCentered: PropTypes.bool,
}

export default Layout
