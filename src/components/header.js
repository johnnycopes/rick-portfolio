import React from "react"
import PropTypes from "prop-types"

import styles from "../styles/components/header.module.scss"
import Name from "../components/name"
import InternalLink from "../components/internal-link"
import ExternalLink from "../components/external-link"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <nav className={styles.left}>
        <InternalLink className={`${styles.item} ${styles.name}`}
          link="/"
          >
          <Name />
        </InternalLink>
        <span className={`${styles.item} ${styles.divider}`}>
          |
        </span>
        <ExternalLink className={`${styles.item} ${styles.icon}`}
          link="mailto:risegal4@gmail.com"
          >
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </ExternalLink>
        <ExternalLink className={`${styles.item} ${styles.icon}`}
          link="https://www.linkedin.com/in/rsegal"
          >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </ExternalLink>
        <ExternalLink className={`${styles.item} ${styles.icon}`}
          link="https://www.instagram.com/riiyaack/"
          >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </ExternalLink>
        <ExternalLink className={`${styles.item} ${styles.icon}`}
          link="https://twitter.com/seinfeld2000?lang=en"
          >
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </ExternalLink>
        <ExternalLink>
        </ExternalLink>
      </nav>
      <nav className={styles.right}>
        <InternalLink className={styles.item}
          link="/work"
          >
          work
       </InternalLink>
        <InternalLink className={styles.item}
          link="/about"
          >
          about
        </InternalLink>
        <InternalLink className={`${styles.item} ${styles.misc}`}
          link="/misc"
          >
          <img className={styles.bird}
            src="assets/img/seagull.png"
            alt="misc"
          />
        </InternalLink>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
