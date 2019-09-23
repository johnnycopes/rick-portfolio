import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby'
import cx from "classnames"

import styles from "../styles/components/Layout.module.scss"
import Header from "./Header"

const Layout = ({ children, showHeader, verticallyCentered, horizontallyCentered }) => {
  const data = useStaticQuery(
    graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content={data.site.siteMetadata.description}
        />
      </Helmet>
      {showHeader &&
        <Header />
      }
      <div className={cx(
        { [styles.wrapper]: showHeader }
        )}>
        <div className={cx(
          styles.content,
          { [styles.includesHeader]: showHeader },
          { [styles.verticallyCentered]: verticallyCentered },
          { [styles.horizontallyCentered]: horizontallyCentered },
          )}>
          {children}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
  verticallyCentered: PropTypes.bool,
  horizontallyCentered: PropTypes.bool
}

Layout.defaultProps = {
  showHeader: true
}

export default Layout
